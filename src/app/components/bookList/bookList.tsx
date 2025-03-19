import React from "react";
import BookCard from "../bookCard/bookCard";
import styles from "./bookList.module.css";

export default function BookList() {
  return (
    <div className={styles.bookGridContainer}>
      <BookCard id={1}/>
      <BookCard id={2}/>
      <BookCard id={3}/>
      <BookCard id={4}/>
      <BookCard id={5}/>
      <BookCard id={6}/>
      <BookCard id={7}/>
      <BookCard id={8}/>
      <BookCard id={9}/>
    </div>
  );
}
