import React from "react";
import styles from "./Cards.module.css";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="container">
      <div className={styles.cards}>
        <div className={styles.cardsItem}>
          <Link className={styles.link} to="/schedule">
            Расписание
          </Link>
        </div>
        <div className={styles.cardsItem}>
          <Link className={styles.link} to="/jornal">
            Дневник
          </Link>
        </div>
        <div className={styles.cardsItem}>
          <Link className={styles.link} to="/reports">
            Отчёты
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
