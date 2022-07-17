import React, { memo } from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./app";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./UI/image_file_input/image_file_input";
import CardRepository from "./service/card_repository";
import { firebaseApp } from "./service/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
const authService = new AuthService(firebaseApp);

const imageUploader = new ImageUploader();

const cardRepository = new CardRepository(firebaseApp);

const FileInput = memo((props) => (
    <ImageFileInput {...props} imageUploader={imageUploader} />
));
root.render(
    <React.StrictMode>
        <App
            FileInput={FileInput}
            authService={authService}
            cardRepository={cardRepository}
        />
    </React.StrictMode>
);
