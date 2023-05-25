import React from "react";
import styles from "./Cards.module.css";
import { Link } from "react-router-dom";
import scheduleImg from "../../assets/schedule-calendar.svg";
import jornalImg from "../../assets/jornal.svg";
import reportsImg from "../../assets/reports-svgrepo-com.svg";

const Cards = () => {
  return (
    <div className={styles.cardsWrapper}>
      <div className="container">
        <h1 className={styles.title}>Главная</h1>
        <div className={styles.cards}>
          <div className={styles.cardsItem}>
            <div className={styles.cardLogo}>
              <img src={scheduleImg} alt="" />
            </div>
            <Link className={styles.link} to="/schedule">
              Расписание
            </Link>
          </div>
          <div className={styles.cardsItem}>
            <div className={styles.cardLogo}>
              <img src={jornalImg} alt="" />
            </div>
            <Link className={styles.link} to="/jornal">
              Дневник
            </Link>
          </div>
          <div className={styles.cardsItem}>
            <div className={styles.cardLogo}>
              <img src={reportsImg} alt="" />
            </div>
            <Link className={styles.link} to="/reports">
              Отчёты
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
