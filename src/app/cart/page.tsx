"use client";
import React from "react";
import useCartStore from "../store/cartStore";
import styles from "./cart.module.css";
import CustomButton from "../components/button/button";

function page() {
  const { cart, removeFromCart, updateQuantity } = useCartStore();

  return (
    <div>
      <h1>Cart</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Book</th>
            <th>Author</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>${book.salePrice}</td>
              <td className={styles.quantity}>
                {book.quantity}
                <div className={styles.quantityButtons}>
                  <CustomButton text="+" variant="primary" onClick={() => updateQuantity(book.id, 1)} />
                  <CustomButton text="-" variant="secondary" onClick={() => updateQuantity(book.id, -1)} />
                </div>
              </td>
              <td>
                <CustomButton
                  text="Remove"
                  variant="danger"
                  onClick={() => removeFromCart(book.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default page;
