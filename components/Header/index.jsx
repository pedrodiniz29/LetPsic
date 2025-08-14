import styles from "./Header.module.css";

export default function Header(props) {
  return (
    <div className={styles.header}>
      <img
        src={
          "https://psicologaleticiapratesnovak.my.canva.site/portifolio/_assets/media/9354c2dbbfe0b412b21771d87098c7a8.png"
        }
        alt="Tereos"
      />
      <h1>{props.title}</h1>
      <h2></h2>
    </div>
  );
}
