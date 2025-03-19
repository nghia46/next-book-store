"use client";
import React from "react";
import styles from "./bookCard.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

type BookCardProps = {
  id: number;
};

const BookCard: React.FC<BookCardProps> = ({ id }) => {
  const router = useRouter();
  const handleGoToDetail = () => {
    router.push(`/book/${id}`);
  };
  const handleAddToCart = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation(); // Ngăn sự kiện click lan truyền
    console.log(`Added to cart id: ${id}`);
  }
  return (
    <div className={styles.content} onClick={handleGoToDetail}>
      <Image
        className={styles.image}
        src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"
        alt="Book"
        width={200}
        height={300}
      />
      <div className={styles.textContainer}>
        <p className={styles.title}>Book Title</p>
        <p className={styles.author}>Author</p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit mollitia
          dicta dolor? Doloremque tenetur cumque in consequuntur, amet dolor
          dolorum impedit debitis ad illum. Voluptatum
        </p>
        <div className={styles.priceContainer}>
          <div className={styles.priceSaleContainer}>
            <p className={styles.price}>$9.99</p>
            <p className={styles.salePercent}>-20%</p>
          </div>
          <p className={styles.salePrice}>$9.99</p>
        </div>
      </div>
      <button
        className={styles.button}
        onClick={(e) => {
          handleAddToCart(e);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default BookCard;
