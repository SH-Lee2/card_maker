import Login from "./components/pages/login/login/login";
import styles from "./app.module.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Maker from "./components/pages/maker/maker";

const App = ({ FileInput, authService, cardRepository }) => {
    return (
        <div className={styles.app}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Login authService={authService} />}
                    />
                    <Route
                        path="maker"
                        element={
                            <Maker
                                FileInput={FileInput}
                                authService={authService}
                                cardRepository={cardRepository}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
