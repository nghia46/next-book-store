"use client";
import React from "react";
import useCartStore from "../store/cartStore";
import styles from "./cart.module.css";
import { Book } from "../lib/models/book";

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCartStore();

  return (
    <div>
      <h1>Cart</h1>
      <div className={styles.cart}>
        {cart.map((item: Book) => (
          <div key={item.id} className={styles.cartItem}>
            <div className={styles.cartItemHeader}>
              <img className={styles.image} src={item.image} alt={item.title} />
              <h3 className={styles.title}>{item.title}</h3>
            </div>
            <p>Price: ${item.salePrice}</p>

            <div className={styles.cartItemQuantity}>
              <input
                className={styles.quantityInput}
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, Number(e.target.value))
                }
                onKeyDown={(e) => e.preventDefault()}
              />
            </div>

            <div className={styles.cartItemActions}>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
              <button>Click Me</button>
              <button>Click Me</button>
            </div>
          </div>
        ))}
        <div className={styles.cartTotal}>
          <h3>
            Total: $
            {cart.reduce(
              (acc, item) => acc + item.salePrice * item.quantity,
              0
            )}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Cart;
