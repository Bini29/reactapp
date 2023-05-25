import React from "react";
import styles from "./Schedule.module.css";

const Schedule = () => {
  return (
    <div className={styles.schedule}>
      <div className="container">
        <h1 className={styles.title}>
          Расписание уроков и мероприятий на день: <b> Понедельник 8.05.23</b>
        </h1>
        <table className={styles.table}>
          <tr>
            <th>Время</th>
            <th>Урок и мероприятия</th>
          </tr>
          <tr>
            <td>8:55-9:35</td>
            <td>Урок:Физика</td>
          </tr>
          <tr>
            <td>9:50-9:30</td>
            <td>Урок:Алгебра</td>
          </tr>
          <tr>
            <td>9:50-9:30</td>
            <td>Урок:Алгебра</td>
          </tr>
          <tr>
            <td>9:50-9:30</td>
            <td>Урок:Алгебра</td>
          </tr>
          <tr>
            <td>9:50-9:30</td>
            <td>Урок:Алгебра</td>
          </tr>
          <tr>
            <td>9:50-9:30</td>
            <td>Урок:Алгебра</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
