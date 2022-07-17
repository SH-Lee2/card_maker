import React, { useCallback } from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../footer/footer";
import Header from "../../header/header";
import Editor from "./editor/editor";

import styles from "./maker.module.css";
import Preview from "./preview/preview";

function Maker({ FileInput, authService, cardRepository }) {
    const [cards, setCards] = useState({});
    let navigate = useNavigate();
    const {
        state: { userId },
    } = useLocation();

    const onLogout = useCallback(() => {
        authService.logout();
    }, [authService]);

    useEffect(() => {
        if (!userId) return;
        const stopSync = cardRepository.syncCards(userId, (value) =>
            setCards(value)
        );
        return () => stopSync();
    }, [userId, cardRepository]);

    useEffect(() => {
        authService.onAuthChange((user) => {
            !user && navigate("/");
        });
    }, [authService, navigate]);

    const onUpdateOrAddCard = (card) => {
        setCards((preCards) => {
            const update = { ...preCards };
            update[card.id] = card;
            return update;
        });
        cardRepository.saveCard(userId, card);
    };
    const onDeleteCard = (card) => {
        setCards((preCards) => {
            const update = { ...preCards };
            delete update[card.id];
            return update;
        });
        cardRepository.removeCard(userId, card);
    };
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor
                    FileInput={FileInput}
                    cards={cards}
                    onAddCard={onUpdateOrAddCard}
                    onUpdateCard={onUpdateOrAddCard}
                    onDeleteCard={onDeleteCard}
                />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    );
}

export default Maker;
