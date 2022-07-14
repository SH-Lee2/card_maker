class ImageUploader {
    async upload(file) {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "omj3l8z0");
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dz6bdal71/image/upload",
            {
                method: "POST",
                body: data,
            }
        );
        return res.json();
    }
}

export default ImageUploader;
