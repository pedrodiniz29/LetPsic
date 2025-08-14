import styles from "./Header.module.css";
import logo from "./Logo.png";

export default function Header(props) {
  return (
    <div className={styles.header}>
      <img src={logo.src} alt="Tereos" />
      <h1>{props.title}</h1>
      <h2>12</h2>
    </div>
  );
}
