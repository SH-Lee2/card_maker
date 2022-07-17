import React, { useRef, useState } from "react";
import { memo } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = memo(({ imageUploader, name, onFileChange }) => {
    const inputRef = useRef();
    const [loading, setLoading] = useState(false);

    const uploadImage = async (event) => {
        setLoading(true);
        const upload = await imageUploader //
            .upload(event.target.files[0]);
        setLoading(false);
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
            {!loading && (
                <button
                    className={`${styles.button} ${
                        name ? styles.pink : styles.gray
                    }`}
                    onClick={onClick}
                >
                    {name || "NO file"}
                </button>
            )}
            {loading && <div className={styles.loading}></div>}
        </div>
    );
});

export default ImageFileInput;
