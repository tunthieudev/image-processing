from PIL import Image
import matplotlib.pyplot as plt
import cv2
import numpy as np

def negative_transform(imgpath):
    img = Image.open(imgpath)
    img_array = np.array(img)

    negative_img_array = 255 - img_array
    negative_image = Image.fromarray(negative_img_array)

    return negative_image

def thresholding_image(imgpath):
    gray_image = cv2.cvtColor(imgpath, cv2.COLOR_BGR2GRAY)
    _, threshold_image =  cv2.threshold(gray_image, 127, 255, cv2.THRESH_BINARY)
    
    pil_image = Image.fromarray(threshold_image)
    return pil_image

def logarit_transform(img_raw):
    img = cv2.cvtColor(img_raw, cv2.COLOR_BGR2GRAY)
    c = 255/(np.log(1 + np.max(img))) 
    log_transformed = c * np.log(1 + img) 
  
    # Specify the data type. 
    log_transformed = np.array(log_transformed, dtype = np.uint8)
    pil_image = Image.fromarray(log_transformed)
    return pil_image

def histogram_equalizing(img_raw):
    img_to_yuv = cv2.cvtColor(img_raw,cv2.COLOR_BGR2YUV)
    img_to_yuv[:,:,0] = cv2.equalizeHist(img_to_yuv[:,:,0])
    hist_equalization_result = cv2.cvtColor(img_to_yuv, cv2.COLOR_YUV2BGR)

    pil_image = Image.fromarray(hist_equalization_result)
    return pil_image

def average_filter(img_raw):
    img = cv2.cvtColor(img_raw, cv2.COLOR_BGR2GRAY)
    m, n = img.shape 

    mask = np.ones([3, 3], dtype = int) 
    mask = mask / 9
    img_new = np.zeros([m, n])

    for i in range(1, m-1): 
        for j in range(1, n-1): 
            temp = img[i-1, j-1]*mask[0, 0]+img[i-1, j]*mask[0, 1]+img[i-1, j + 1]*mask[0, 2]+img[i, j-1]*mask[1, 0]+ img[i, j]*mask[1, 1]+img[i, j + 1]*mask[1, 2]+img[i + 1, j-1]*mask[2, 0]+img[i + 1, j]*mask[2, 1]+img[i + 1, j + 1]*mask[2, 2] 
            
            img_new[i, j]= temp 

    img_new = img_new.astype(np.uint8) 

    pil_image = Image.fromarray(img_new)
    return pil_image

def weighted_averaging(img_raw):
    kernel = (
        np.array([[1, 2, 1], [2, 4, 2], [1, 2, 1]], dtype=np.float32) / 16
    )  
    processedImage = cv2.filter2D(img_raw, -1, kernel)
    pil_image = Image.fromarray(processedImage)
    return pil_image

def median_filter(img_raw):
    img = cv2.cvtColor(img_raw, cv2.COLOR_BGR2GRAY)
    m, n = img.shape 

    img_new1 = np.zeros([m, n])
    for i in range(1, m-1): 
        for j in range(1, n-1): 
            temp = [img[i-1, j-1], 
                img[i-1, j], 
                img[i-1, j + 1], 
                img[i, j-1], 
                img[i, j], 
                img[i, j + 1], 
                img[i + 1, j-1], 
                img[i + 1, j], 
                img[i + 1, j + 1]] 
            
            temp = sorted(temp) 
            img_new1[i, j]= temp[4] 
    
    img_new1 = img_new1.astype(np.uint8) 
    pil_image = Image.fromarray(img_new1)
    return pil_image


def roberts_operator(img_raw):
    img = cv2.cvtColor(img_raw, cv2.COLOR_BGR2GRAY)
    roberts_x = np.array([[1, 0], [0, -1]], dtype=np.float32)
    roberts_y = np.array([[0, -1], [1, 0]], dtype=np.float32)

    
    roberts_x_edges = cv2.filter2D(img, -1, roberts_x)
    roberts_y_edges = cv2.filter2D(img, -1, roberts_y)

    roberts_x_edges = cv2.filter2D(img, -1, roberts_x)
    roberts_y_edges = cv2.filter2D(img, -1, roberts_y)

    roberts_x_edges = roberts_x_edges.astype(np.float32)
    roberts_y_edges = roberts_y_edges.astype(np.float32)

    processedImage = cv2.magnitude(roberts_x_edges, roberts_y_edges)
    processedImage = processedImage.astype(np.uint8)

    pil_image = Image.fromarray(processedImage)
    return pil_image

def sobels_operator(img_raw):
    gray_image = cv2.cvtColor(img_raw, cv2.COLOR_BGR2GRAY)

    sobel_x = cv2.Sobel(gray_image, cv2.CV_64F, 1, 0, ksize=3)
    sobel_y = cv2.Sobel(gray_image, cv2.CV_64F, 0, 1, ksize=3)

    processedImage = cv2.magnitude(sobel_x, sobel_y)
    processedImage = processedImage.astype(np.uint8)

    pil_image = Image.fromarray(processedImage)
    return pil_image

def laplacian_operator(img_raw):
    gray_image = cv2.cvtColor(img_raw, cv2.COLOR_BGR2GRAY)
    laplace = cv2.Laplacian(gray_image, cv2.CV_64F)
    laplace = laplace.astype(np.uint8)

    pil_image = Image.fromarray(laplace)
    return pil_image

def prewitt_operator(img_raw):
    gray_image = cv2.cvtColor(img_raw, cv2.COLOR_BGR2GRAY)
    prewitt_kernel_x = cv2.getDerivKernels(1, 0, 3, normalize=True)
    prewitt_kernel_y = cv2.getDerivKernels(0, 1, 3, normalize=True)

    prewitt_x = cv2.filter2D(
        gray_image, cv2.CV_64F, prewitt_kernel_x[0] * prewitt_kernel_x[1]
    )
    prewitt_y = cv2.filter2D(
        gray_image, cv2.CV_64F, prewitt_kernel_y[0] * prewitt_kernel_y[1]
    )

    processedImage = cv2.magnitude(prewitt_x, prewitt_y)
    processedImage = processedImage.astype(np.uint8)

    pil_image = Image.fromarray(processedImage)
    return pil_image

def canny_operator(img_raw):
    img = cv2.cvtColor(img_raw, cv2.COLOR_BGR2GRAY)
    img_blur = cv2.GaussianBlur(img, (3,3), 0) 

    canny = cv2.Canny(image=img_blur, threshold1=100, threshold2=200)
    canny = canny.astype(np.uint8)

    pil_image = Image.fromarray(canny)
    return pil_image

def otsu_algorithm(img_raw):
    img = cv2.cvtColor(img_raw, cv2.COLOR_BGR2GRAY)
    ret, thresh1 = cv2.threshold(img, 120, 255, cv2.THRESH_BINARY + 
                                            cv2.THRESH_OTSU) 
    thresh1 = thresh1.astype(np.uint8)
    
    pil_image = Image.fromarray(thresh1)
    return pil_image

# phép co
def erosion_image(img_raw):
    kernel = np.ones((3, 3), np.uint8)
    processedImage = cv2.erode(img_raw, kernel, iterations=1)

    pil_image = Image.fromarray(processedImage)
    return pil_image

# phép giãn
def dilation_image(img_raw):
    processedImage = cv2.convertScaleAbs(img_raw, 1.1, 5)

    pil_image = Image.fromarray(processedImage)
    return pil_image

def closing_image(img_raw):
    kernel = np.ones((3, 3), np.uint8)

    img = cv2.erode(img_raw, kernel, iterations=1)
    processedImage = cv2.convertScaleAbs(img, 1.1, 5)

    pil_image = Image.fromarray(processedImage)
    return pil_image
    
def opening_image(img_raw):
    kernel = np.ones((3, 3), np.uint8)

    img = cv2.dilate(img_raw, kernel, iterations=1)
    processedImage = cv2.erode(img, kernel, iterations=1)

    pil_image = Image.fromarray(processedImage)
    return pil_image