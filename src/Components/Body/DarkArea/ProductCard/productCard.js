import styles from "./productCard.module.css";
import logo from "./logo.png";
import infoIco from "./infoIco.png";

export default function ProductCard({color, infoText, infoTextTitle, additionalText, testText, beforeBlueText,
                                        blueText, dummyText, buttonName, buttonCallBack}){
    return <div className={styles.container}>
        <div className={styles.info} >
            <img src={infoIco} className={styles.infoIco}/>
            <div className={styles.infoText} >{infoTextTitle}<b>{infoText}</b></div>
        </div>
        <div className={styles.coloredBar} style={{"backgroundColor": color}}>
            <img src={logo} className={styles.picture}/>
        </div>
        <div className={styles.nli}>{additionalText.toUpperCase()}</div>
        <div className={styles.testText}>{testText.toUpperCase()}</div>
        <div className={styles.blueText}>{beforeBlueText} <span style={{color:"#0460A9", "fontWeight": "bold"}}>{blueText}</span> </div>
        <div className={styles.dummyText}>{dummyText}</div>
        <button className={styles.button} onClick={() => buttonCallBack()}>{buttonName.toUpperCase()}</button>
    </div>
}