import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../footer/footer";
import Header from "../../header/header";
import Editor from "./editor/editor";

import styles from "./maker.module.css";
import Preview from "./preview/preview";

const CARDS = [
    {
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
    {
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
    {
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
];

function Maker({ authService }) {
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
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards={CARDS} />
                <Preview cards={CARDS} />
            </div>
            <Footer />
        </section>
    );
}

export default Maker;
