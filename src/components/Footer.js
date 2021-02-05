import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Esto es el footer</p>
      <p className={styles.footer_parrafo}>Todos los derechos reservados 2020</p>
    </footer>
  );
}
