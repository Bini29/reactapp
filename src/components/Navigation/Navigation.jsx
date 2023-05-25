import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navigation.module.css";
import logo from "../../assets/logo.svg";
import profileImg from "../../assets/profile.png";

const Navigation = () => {
  const location = useLocation();
  console.log(location.pathname);
  console.log(location.pathname === "/schedule");
  return (
    <div className={styles.navBur}>
      <div className={["container", styles.navWrapper].join(" ")}>
        <Link to="/">
          <img src={logo} alt="" width="57" height="50" />
        </Link>
        <ul className={styles.nav}>
          <li>
            <Link
              to="/schedule"
              className={
                location.pathname === "/schedule" ? styles.active : null
              }
            >
              Расписание
            </Link>
          </li>
          <li>
            <Link
              to="/jornal"
              className={location.pathname === "/jornal" ? styles.active : null}
            >
              Дневник
            </Link>
          </li>
          <li>
            <Link
              to="/reports"
              className={
                location.pathname === "/reports" ? styles.active : null
              }
            >
              Отчёты
            </Link>
          </li>
        </ul>
        <Link to="/notfound">
          <img src={profileImg} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
