import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import logo from "../../assets/logo.svg";
import profileImg from "../../assets/profile.png";

const Navigation = () => {
  return (
    <div className={["container", styles.navWrapper].join(" ")}>
      <Link to="/">
        <img src={logo} alt="" width="57" height="50" />
      </Link>
      <ul className={styles.nav}>
        <li>
          <Link to="/schedule">Расписание</Link>
        </li>
        <li>
          <Link to="/jornal">Дневник</Link>
        </li>
        <li>
          <Link to="/reports">Отчёты</Link>
        </li>
      </ul>
      <Link to="/notfound">
        <img src={profileImg} alt="" />
      </Link>
    </div>
  );
};

export default Navigation;
