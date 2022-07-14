import React from "react";
import { useRef } from "react";
import Button from "../../../../../UI/button/button";
import styles from "./card_add_form.module.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
const CardAddForm = ({ FileInput, onAddCard }) => {
    const [file, setFile] = useState({ fileName: "", fileURL: "" });
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const onSubmit = (event) => {
        event.preventDefault();
        const card = {
            id: uuidv4(),
            name: nameRef.current.value || "",
            company: companyRef.current.value || "",
            theme: themeRef.current.value,
            title: titleRef.current.value || "",
            email: emailRef.current.value || "",
            message: messageRef.current.value || "",
            fileName: file.fileName || "",
            fileURL: file.fileURL || "",
        };
        formRef.current.reset();
        setFile({ fileName: "", fileURL: "" });
        onAddCard(card);
    };

    const onFileChange = (file) => {
        setFile({ fileName: file.fileName, fileURL: file.fileURL });
    };
    return (
        <form ref={formRef} className={styles.form}>
            <input
                ref={nameRef}
                className={styles.input}
                type="text"
                name="name"
                placeholder="name"
            />
            <input
                ref={companyRef}
                className={styles.input}
                type="text"
                name="company"
                placeholder="company"
            />
            <select
                ref={themeRef}
                className={styles.select}
                name="theme"
                placeholder="theme"
            >
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input
                ref={titleRef}
                className={styles.input}
                type="text"
                name="title"
                placeholder="title"
            />
            <input
                ref={emailRef}
                className={styles.input}
                type="text"
                name="email"
                placeholder="email"
            />
            <textarea
                ref={messageRef}
                className={styles.textarea}
                name="message"
                placeholder="message"
            />
            <div className={styles.fileInput}>
                <FileInput name={file.fileName} onFileChange={onFileChange} />
            </div>
            <Button name="Add" onClick={onSubmit} />
        </form>
    );
};

export default CardAddForm;
