import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul>
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
    </div>
  );
};

export default Navigation;
