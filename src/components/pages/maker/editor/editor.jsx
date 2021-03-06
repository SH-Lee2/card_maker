import React from "react";
import CardAddForm from "./card_add_form/card_add_form";
import CardEditForm from "./card_edit_form/card_edit_form";
import styles from "./editor.module.css";
function Editor({ FileInput, cards, onAddCard, onUpdateCard, onDeleteCard }) {
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Maker</h1>
            {Object.keys(cards).map((key) => (
                <CardEditForm
                    FileInput={FileInput}
                    key={key}
                    card={cards[key]}
                    onUpdateCard={onUpdateCard}
                    onDeleteCard={onDeleteCard}
                />
            ))}
            <CardAddForm FileInput={FileInput} onAddCard={onAddCard} />
        </section>
    );
}

export default Editor;
