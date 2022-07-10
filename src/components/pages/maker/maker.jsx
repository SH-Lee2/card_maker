import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../footer/footer";
import Header from "../../header/header";

import styles from "./maker.module.css";

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
        <section>
            <Header onLogout={onLogout} />
            <Footer />
        </section>
    );
}

export default Maker;
