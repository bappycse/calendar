import http from "../http-common";

class UploadFilesService {
    upload(file, onUploadProgress) {
        console.log('File',file);
        let formData = new FormData();
            console.log(formData);
        formData.append("file", file);

        return http.post("/api/images", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            onUploadProgress
        });
    }

    getFiles() {

    }
}

export default new UploadFilesService();

