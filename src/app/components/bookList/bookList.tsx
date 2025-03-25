"use client";
import React, { useEffect, useState } from "react";
import BookCard from "@/app/components/bookCard/bookCard";
import styles from "./bookList.module.css";

import { Book } from "@/app/lib/models/book";
import { getBooks } from "@/app/lib/api/book";

export default function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getBooks();
        setBooks(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch books");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.bookGridContainer}>
      {books.map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
          author={book.author}
          title={book.title}
          description={book.description}
          price={book.price}
          salePrice={book.salePrice}
          salePercent={book.salePercent}
          image={book.image}
          quantity={book.quantity}
        />
      ))}
    </div>
  );
}
