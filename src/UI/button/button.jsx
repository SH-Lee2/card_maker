import React from "react";
import { memo } from "react";
import styles from "./button.module.css";

const Button = memo(({ name, onClick, type }) => (
    <button className={styles.button} onClick={onClick} type={type}>
        {name}
    </button>
));

export default Button;
