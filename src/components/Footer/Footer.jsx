import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={["container", styles.futFlex].join(" ")}>
        <span>
          Химико-механический техникум <br /> 2023 Все права защищены
        </span>
        <img src={logo} alt="" width="50px" />
      </div>
    </footer>
  );
};

export default Footer;
