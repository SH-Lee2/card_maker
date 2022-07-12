import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../footer/footer";
import Header from "../../header/header";
import Editor from "./editor/editor";

import styles from "./maker.module.css";
import Preview from "./preview/preview";

function Maker({ authService }) {
    const [cards, setCards] = useState({
        1: {
            id: "1",
            name: "SiHyeong",
            company: "naver",
            theme: "light",
            title: "Software Engineer",
            email: "tlgud585@gmail.com",
            message: "go for it",
            fileName: "sihyeong",
            fileURL: null,
        },
        2: {
            id: "2",
            name: "SiHyeong2",
            company: "naver",
            theme: "dark",
            title: "Software Engineer",
            email: "tlgud585@gmail.com",
            message: "go for it",
            fileName: "sihyeong",
            fileURL: null,
        },
        3: {
            id: "3",
            name: "SiHyeong3",
            company: "naver",
            theme: "colorful",
            title: "Software Engineer",
            email: "tlgud585@gmail.com",
            message: "go for it",
            fileName: "sihyeong",
            fileURL: null,
        },
    });
    let navigate = useNavigate();
    const { state: id } = useLocation();
    const onLogout = () => {
        authService.logout();
    };
    useEffect(() => {
        authService.onAuthChange((user) => {
            !user && navigate("/");
        });
    });

    const onUpdateOrAddCard = (card) => {
        setCards((preCards) => {
            const update = { ...preCards };
            update[card.id] = card;
            return update;
        });
    };
    const onDeleteCard = (card) => {
        setCards((preCards) => {
            const update = { ...preCards };
            delete update[card.id];
            return update;
        });
    };
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor
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
