import styles from "./button.module.css";

export default function Button({ico, callBack, txt, border}){

    let parts = [];

    if (ico) parts.push(<img src={ico} className={styles.ico} key={Math.random()}/>);
    if (txt) parts.push(<div className={styles.txt} key={Math.random()}>{txt}</div>);
    if (border) parts.push(<div className={styles.border} key={Math.random()}/>);

    return <div className={styles.button} onClick={callBack()} key={Math.random()}>
        {parts}
    </div>
}