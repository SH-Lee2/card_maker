import Login from "./components/pages/login/login/login";
import styles from "./app.module.css";

function App({ authService }) {
    return (
        <div className={styles.app}>
            <Login authService={authService} />
        </div>
    );
}

export default App;
