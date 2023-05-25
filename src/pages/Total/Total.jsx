import React from "react";
import styles from "./Total.module.css";

const Total = () => {
  return (
    <div className={styles.total}>
      <div className="container">
        <h1 className={styles.title}>Итоговые оценки</h1>
        <table className={styles.table}>
          <tr>
            <th>Предмет</th>
            <th>Оценка</th>
          </tr>
          <tr>
            <td>Физика</td>
            <td>5</td>
          </tr>
          <tr>
            <td>История</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Математика</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Литература</td>
            <td>4</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Total;
