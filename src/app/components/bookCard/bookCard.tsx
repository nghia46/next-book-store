"use client";
import React from "react";
import styles from "./bookCard.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Book } from "@/app/lib/models/book";
import useCartStore from "@/app/store/cartStore";

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

  const { addToCart } = useCartStore();

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
            onClick={(e: { stopPropagation: () => void }) => {
              e.stopPropagation();
              addToCart({
                id,
                title,
                description,
                salePrice,
                image,
                author,
                quantity: 0
              });
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
