import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../assets/3d02129727137fc9d51a339dd09b3832.jpg";
import { BiShoppingBag } from "react-icons/bi";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow((prevShow) => !prevShow);

    console.log(show);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" className={styles.logoPhoto} />
        <h1 className={styles.logoText}>DoraShop</h1>
      </div>

      <div className={styles.desktopNav}>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem}>Products</li>
          <li className={styles.navItem}>Login</li>
          <li className={styles.navItem}>
            <BiShoppingBag />
          </li>
        </ul>
      </div>

      <RiMenu3Fill className={styles.openBtn} onClick={toggleShow} />

      <div
        className={
          show ? `${styles.mobileNav} ${styles.show}` : `${styles.mobileNav}`
        }
      >
        <RiCloseFill className={styles.closeBtn} onClick={toggleShow} />
        <ul className={styles.navItems}>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem}>Products</li>
          <li className={styles.navItem}>Login</li>
          <li className={styles.navItem}>
            <BiShoppingBag />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
