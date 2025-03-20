"use client";
import React from "react";
import styles from "./bookCard.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Book } from "@/app/models/book";

const BookCard: React.FC<Book> = ({
  id,
  title,
  description,
  price,
  salePercent,
  salePrice,
  image,
  author,
}) => {
  const router = useRouter();
  const handleGoToDetail = () => {
    router.push(`/book/${id}`);
  };
  const handleAddToCart = (e: { stopPropagation: () => void }) => {
    e.stopPropagation(); // Ngăn sự kiện click lan truyền
    console.log(`Added to cart id: ${id}`);
  };
  return (
    <div className={styles.content} onClick={handleGoToDetail}>
      <Image
        className={styles.image}
        src={image || ""}
        alt="Book"
        width={200}
        height={300}
      />
      <div className={styles.textContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.author}>{author}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.butonPriceContainer}>
          <div className={styles.priceContainer}>
            <div className={styles.priceSaleContainer}>
              <p className={styles.price}>{price}$</p>
              <p className={styles.salePercent}>-{salePercent}%</p>
            </div>
            <p className={styles.salePrice}>{salePrice}$</p>
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
      </div>
    </div>
  );
};
export default BookCard;
