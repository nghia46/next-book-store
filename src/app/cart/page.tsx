"use client";
import React from "react";
import useCartStore from "../store/cartStore";
import styles from "./cart.module.css";
import CustomButton from "../components/button/button";

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCartStore();

  return (
    <div>
      <h1>Cart</h1>
      <div className={styles.cartActions}>
        <div className={styles.cartActionButton}>
          <CustomButton
            text="Remove all cart"
            variant="danger"
            onClick={clearCart}
          />
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Image</th>
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
              <td>
                <img className={styles.coveImage} width={200} height={300} src={book.image} alt={book.title} />
              </td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>${book.salePrice}</td>
              <td className={styles.quantity}>
                <input
                  type="number"
                  value={book.quantity}
                  onChange={(e) =>
                    updateQuantity(book.id, Number(e.target.value))
                  }
                />
              </td>
              <td>
                <CustomButton
                  text={<span className={styles.removeText}>Remove</span>}
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

export default Cart;
