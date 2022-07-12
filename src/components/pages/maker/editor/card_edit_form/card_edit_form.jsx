import React from "react";
import Button from "../../../../../UI/button/button";
import ImageFileInput from "../../../../../UI/image_file_input/image_file_input";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({ card, onUpdateCard, onDeleteCard }) => {
    const { name, company, title, email, message, theme, fileName, fileURL } =
        card;

    const onChange = (event) => {
        if (event.currentTarget.value === null) {
            return;
        }
        event.preventDefault();
        onUpdateCard({
            ...card,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };
    const onSubmit = () => {
        onDeleteCard(card);
    };
    return (
        <form className={styles.form}>
            <input
                className={styles.input}
                type="text"
                name="name"
                value={name}
                onChange={onChange}
            />
            <input
                className={styles.input}
                type="text"
                name="company"
                value={company}
                onChange={onChange}
            />
            <select
                className={styles.select}
                name="theme"
                value={theme}
                onChange={onChange}
            >
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input
                className={styles.input}
                type="text"
                name="title"
                value={title}
                onChange={onChange}
            />
            <input
                className={styles.input}
                type="text"
                name="email"
                value={email}
                onChange={onChange}
            />
            <textarea
                className={styles.textarea}
                name="message"
                value={message}
                onChange={onChange}
            />
            <div className={styles.fileInput}>
                <ImageFileInput />
            </div>
            <Button name="Delete" type="button" onClick={onSubmit} />
        </form>
    );
};

export default CardEditForm;
