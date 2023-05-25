import React from "react";
import styles from "./Reports.module.css";
import { Link } from "react-router-dom";
const Reports = () => {
  return (
    <div className={styles.reports}>
      <div className="container">
        <h1 className={styles.title}>Отчёты</h1>
        <div className={styles.list}>
          <span>Итоги успеваимости</span>
          <ul>
            <li>
              <Link to="/total"> Итоговые отметки</Link>
            </li>
            <li>
              <Link to="/total123"> Средний балл</Link>
            </li>
            <li>
              <Link to="/total111"> Динамика среднего балла ученика</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reports;
