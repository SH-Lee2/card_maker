import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../footer/footer";
import Header from "../../header/header";
import Editor from "./editor/editor";

import styles from "./maker.module.css";
import Preview from "./preview/preview";

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
                <Editor />
                <Preview />
            </div>
            <Footer />
        </section>
    );
}

export default Maker;
