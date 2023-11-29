function previewImage() {
    var fileInput = document.getElementById('fileInput');
    var imagePreview = document.getElementById('imagePreview');

    var file = fileInput.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            imagePreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

document.getElementById("uploadForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const imgInput = document.getElementById("fileInput");
    const formData = new FormData();
    formData.append("image", imgInput.files[0]);

    if (e.submitter.innerText === "Biến đổi âm bản") {
        axios.post("http://127.0.0.1:5000/api/negative", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (response) {
                document.getElementById('convertImg').innerHTML = `<img src="data:image/jpeg;base64,${response.data.image_data}" style="max-width: 300px; max-height: 300px;">`;
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    else if (e.submitter.innerText === "Phân ngưỡng") {
        axios.post("http://127.0.0.1:5000/api/threshold", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (response) {
                document.getElementById('convertImg').innerHTML = `<img src="data:image/jpeg;base64,${response.data.image_data}" style="max-width: 300px; max-height: 300px;">`;
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    else if (e.submitter.innerText === "Biến đổi logarith") {
        axios.post("http://127.0.0.1:5000/api/logarit", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (response) {
                document.getElementById('convertImg').innerHTML = `<img src="data:image/jpeg;base64,${response.data.image_data}" style="max-width: 300px; max-height: 300px;">`;
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    else if (e.submitter.innerText === "Lược đồ mức xám") {
        axios.post("http://127.0.0.1:5000/api/histogram", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (response) {
                document.getElementById('convertImg').innerHTML = `<img src="data:image/jpeg;base64,${response.data.image_data}" style="max-width: 300px; max-height: 300px;">`;
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    else if (e.submitter.innerText === "Bộ lọc trung bình có trọng số") {
        axios.post("http://127.0.0.1:5000/api/weight", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (response) {
                document.getElementById('convertImg').innerHTML = `<img src="data:image/jpeg;base64,${response.data.image_data}" style="max-width: 300px; max-height: 300px;">`;
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    else if (e.submitter.innerText === "Bộ lọc trung vị") {
        axios.post("http://127.0.0.1:5000/api/median", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (response) {
                document.getElementById('convertImg').innerHTML = `<img src="data:image/jpeg;base64,${response.data.image_data}" style="max-width: 300px; max-height: 300px;">`;
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    else if (e.submitter.innerText === "Toán tử Roberts") {
        axios.post("http://127.0.0.1:5000/api/roberts", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (response) {
                document.getElementById('convertImg').innerHTML = `<img src="data:image/jpeg;base64,${response.data.image_data}" style="max-width: 300px; max-height: 300px;">`;
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    else if (e.submitter.innerText === "Toán tử Sobel") {
        axios.post("http://127.0.0.1:5000/api/sobels", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (response) {
                document.getElementById('convertImg').innerHTML = `<img src="data:image/jpeg;base64,${response.data.image_data}" style="max-width: 300px; max-height: 300px;">`;
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    else if (e.submitter.innerText === "Toán tử Laplacian") {
        axios.post("http://127.0.0.1:5000/api/laplace", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (response) {
                document.getElementById('convertImg').innerHTML = `<img src="data:image/jpeg;base64,${response.data.image_data}" style="max-width: 300px; max-height: 300px;">`;
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    else if (e.submitter.innerText === "Toán tử Prewitt") {
        axios.post("http://127.0.0.1:5000/api/prewitt", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (response) {
                document.getElementById('convertImg').innerHTML = `<img src="data:image/jpeg;base64,${response.data.image_data}" style="max-width: 300px; max-height: 300px;">`;
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    else if (e.submitter.innerText === "Phương pháp Canny") {
        axios.post("http://127.0.0.1:5000/api/canny", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (response) {
                document.getElementById('convertImg').innerHTML = `<img src="data:image/jpeg;base64,${response.data.image_data}" style="max-width: 300px; max-height: 300px;">`;
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    else if (e.submitter.innerText === "Thuật toán OTSU") {
        axios.post("http://127.0.0.1:5000/api/otsu", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (response) {
                document.getElementById('convertImg').innerHTML = `<img src="data:image/jpeg;base64,${response.data.image_data}" style="max-width: 300px; max-height: 300px;">`;
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    else if (e.submitter.innerText === "Phép dãn") {
        axios.post("http://127.0.0.1:5000/api/dilate", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (response) {
                document.getElementById('convertImg').innerHTML = `<img src="data:image/jpeg;base64,${response.data.image_data}" style="max-width: 300px; max-height: 300px;">`;
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    else if (e.submitter.innerText === "Phép co") {
        axios.post("http://127.0.0.1:5000/api/erosion", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (response) {
                document.getElementById('convertImg').innerHTML = `<img src="data:image/jpeg;base64,${response.data.image_data}" style="max-width: 300px; max-height: 300px;">`;
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    else if (e.submitter.innerText === "Phép mở") {
        axios.post("http://127.0.0.1:5000/api/open", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (response) {
                document.getElementById('convertImg').innerHTML = `<img src="data:image/jpeg;base64,${response.data.image_data}" style="max-width: 300px; max-height: 300px;">`;
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    else if (e.submitter.innerText === "Phép đóng") {
        axios.post("http://127.0.0.1:5000/api/close", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (response) {
                document.getElementById('convertImg').innerHTML = `<img src="data:image/jpeg;base64,${response.data.image_data}" style="max-width: 300px; max-height: 300px;">`;
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }
});
