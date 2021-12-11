import styles from "./body.module.css";
import DarkArea from "./DarkArea/darkArea";
import BackEndResponse from "./BackEndResponse/backEndResponse";

export default function Body(){
    return <div className={styles.body}>
        <BackEndResponse/>
        <DarkArea/>
    </div>
}