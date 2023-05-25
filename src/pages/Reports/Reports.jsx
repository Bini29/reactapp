import React from "react";
import styles from "./Reports.module.css";

const Reports = () => {
  return (
    <div className={styles.reports}>
      <div className="container">
        <h1 className={styles.title}>Отчёты</h1>
        <div className={styles.list}>
          <span>Итоги успеваимости</span>
          <ul>
            <li>
              <a href="#"> Итоговые отметки</a>
            </li>
            <li>
              <a href="#"> Средний балл</a>
            </li>
            <li>
              <a href="#"> Динамика среднего балла ученика</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reports;
