import logo from "./logo.png";
import styles from "./logo.module.css";

export default function Logo(){
    return <img src={logo} className={styles.logo}/>
}