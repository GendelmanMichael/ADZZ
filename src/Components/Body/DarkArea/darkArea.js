import styles from "./darkArea.module.css";
import ProductCard from "./ProductCard/productCard";
import {fakeProductCards} from "../../../fakeData";

export default function DarkArea(){

    return <div className={styles.darkArea}>
        <div className={styles.alsoLike}><b>If you like the <span style={{color: "#0460A9"}}>Brand</span>, you will also like:</b></div>
        <div className={styles.productCardHolder} key={Math.random()}>
        {fakeProductCards.map(fkd => {return ProductCard(fkd)})}
        </div>
        <button className={styles.button}>SEE ALL BRANDS</button>
    </div>
}