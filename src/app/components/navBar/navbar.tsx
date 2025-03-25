"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import useCartStore from "@/app/store/cartStore";

const NavBar = () => {
  const sideNavRef = useRef<HTMLUListElement>(null);
  const router = useRouter();

  const toggleNav = (isShow: boolean) => {
    if (sideNavRef.current) {
      sideNavRef.current.classList.toggle(styles.show, isShow);
    }
  };

  const {cart} = useCartStore();

  return (
    <nav>
      <ul className={styles.navList}>
        <li onClick={() => router.push("/")}>
          <Image
            className={styles.logo}
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </li>
        <li className={styles.hideOnMobile} onClick={() => router.push("/about")}>
          About
        </li>
        <li className={styles.hideOnMobile} onClick={() => router.push("/cart")}>
          Cart ({cart.length})
        </li>
        <li className={styles.menuButton} onClick={() => toggleNav(true)}>
          Menu
        </li>
      </ul>

      <ul ref={sideNavRef} className={`${styles.sideNavList}`}>
        <li style={{ fontSize: "2rem" }} onClick={() => toggleNav(false)}>
          X
        </li>
        <li onClick={() => {router.push("/about"); toggleNav(false)}}>About</li>
        <li onClick={() =>{ router.push("/cart"); toggleNav(false)}}> Cart ({cart.length}) </li>
      </ul>
    </nav>
  );
};

export default NavBar;
