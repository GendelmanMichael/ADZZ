import styles from "./backEndResponse.module.css";
import {backEndResponseFakeData} from "../../../fakeData";

export default function BackEndResponse(){

    return <div className={styles.container}>
        <div className={styles.code}>{backEndResponseFakeData.stateNum}</div>
        <div className={styles.text}>{backEndResponseFakeData.stateText}</div>
        <div className={styles.msg}>{backEndResponseFakeData.message}</div>
    </div>

}