import styles from "./header.module.css";
import Logo from "./Logo/logo";
import green from "./green.png";
import blue from "./blue.png";
import orange from "./orahge.png";
import violet from "./violet.png";
import yellow from "./yellow.png";
import Button from "./Button/button";
import menu from "./menu.png";
import magnifier from "./magnifier.png";

export default function Header(){
    return <div className={styles.header}>
        <div className={styles.menuButton} key={Math.random()}>
            <img src={menu}/>
            <div className={styles.menu} key={Math.random()}>
                <Button ico={green} callBack={() => {}} txt = {"Lorem"} border={false} key={Math.random()}/>
                <Button ico={violet} callBack={() => {}} txt = {"Lorem"} border={false} key={Math.random()}/>
                <Button ico={yellow} callBack={() => {}} txt = {"Lorem"} border={false} key={Math.random()}/>
                <Button ico={orange} callBack={() => {}} txt = {"Lorem"} border={false} key={Math.random()}/>
                <Button ico={blue} callBack={() => {}} txt = {"Lorem"} border={false} key={Math.random()}/>
                <Button callBack={() => {}} txt = {"About"} border={false} key={Math.random()}/>
                <Button callBack={() => {}} txt = {"Contact"} border={false} key={Math.random()}/>
                <Button callBack={() => {}} txt = {"Subscribe"} border={true} key={Math.random()}/>
            </div>
        </div>
        <Logo/>
        <div className={styles.buttonBlock} key={Math.random()}>
            <Button ico={green} callBack={() => {}} txt = {"Lorem"} border={false} key={Math.random()}/>
            <Button ico={violet} callBack={() => {}} txt = {"Lorem"} border={false} key={Math.random()}/>
            <Button ico={yellow} callBack={() => {}} txt = {"Lorem"} border={false} key={Math.random()}/>
            <Button ico={orange} callBack={() => {}} txt = {"Lorem"} border={false} key={Math.random()}/>
            <Button ico={blue} callBack={() => {}} txt = {"Lorem"} border={false} key={Math.random()}/>
        </div>
        <div className={styles.buttonBlock} key={Math.random()}>
            <Button callBack={() => {}} txt = {"About"} border={false} key={Math.random()}/>
            <Button callBack={() => {}} txt = {"Contact"} border={false} key={Math.random()}/>
            <Button callBack={() => {}} txt = {"Subscribe"} border={true} key={Math.random()}/>
        </div>
        <div className={styles.magnifier} key={Math.random()}>
        <Button  ico={magnifier} callBack={() => {}} key={Math.random()}/>
        </div>
    </div>

}