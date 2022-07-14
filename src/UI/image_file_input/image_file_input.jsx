import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
    const inputRef = useRef();
    const uploadImage = async (event) => {
        const upload = await imageUploader //
            .upload(event.target.files[0]);
        onFileChange({
            fileName: upload.original_filename,
            fileURL: upload.url,
        });
    };
    const onClick = (event) => {
        event.preventDefault();
        inputRef.current.click();
    };

    return (
        <div className={styles.container}>
            <input
                ref={inputRef}
                className={styles.input}
                type="file"
                accept="image/*"
                onChange={uploadImage}
            />
            <button className={styles.button} onClick={onClick}>
                {name || "NO file"}
            </button>
        </div>
    );
};

export default ImageFileInput;
