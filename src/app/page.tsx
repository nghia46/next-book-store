import BookList from "./components/bookList/bookList";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <BookList/>
    </div>
  );
}
