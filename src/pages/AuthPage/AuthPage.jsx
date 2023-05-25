import React, { useState } from "react";
import { useStore } from "../../store";
import logo from "../../assets/logo.svg";
import { observer } from "mobx-react-lite";
import styles from "./AuthPage.module.css";
import { useNavigate } from "react-router-dom";

const AuthPage = observer(() => {
  const { appStore } = useStore();
  const [login, setLogin] = useState("Kubashin");
  const [password, setPassword] = useState("Kubashin");
  const [error, setError] = useState(false);
  let navigate = useNavigate();

  const setAuth = () => {
    if (login === "Kubashin" && password === "Kubashin") {
      localStorage.setItem("auth", true);
      navigate("/");
      appStore.setAuth(true);
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.authPage}>
      <img className={styles.logo} src={logo} alt="" />
      <h1 className={styles.title}>Электронный дневник</h1>
      <div className={styles.wrapper}>
        <div className={styles.select}>
          <span>Регион</span>
          <select>
            <option value="reg-1" key="reg-1">
              Чувашская республика
            </option>
          </select>
        </div>
        <div className={styles.select}>
          <span>Город</span>
          <select>
            <option value="city-1" key="city-1">
              Чебоксары
            </option>
            <option value="city-2" key="city-2">
              Новочебоксарск
            </option>
          </select>
        </div>
        <div className={styles.select}>
          <span>Тип ОО</span>{" "}
          <select>
            <option value="type-1" key="type-1">
              Школа
            </option>
            <option value="type-2" key="type-2">
              Техникум
            </option>
            <option value="type-3" key="type-3">
              ВУЗ
            </option>
          </select>
        </div>
        <div className={styles.select}>
          <span>Образовательная организация</span>
          <select>
            <option value="org-1" key="org-1">
              МБОУ СОШ №1
            </option>
            <option value="org-2" key="org-2">
              МБОУ СОШ №2
            </option>
            <option value="org-3" key="org-3">
              МБОУ СОШ №3
            </option>
            <option value="org-4" key="org-4">
              ЧЭМК (Чебоксарский электромеханический колледж)
            </option>
            <option value="org-5" key="org-5">
              Колледж имени Никольского
            </option>
            <option value="org-6" key="org-6">
              НХМТ (Новочебоксарский химико-механический техникум)
            </option>
            <option value="org-7" key="org-7">
              Строительный техникум
            </option>
            <option value="org-8" key="org-8">
              Кооперативный институт
            </option>
            <option value="org-9" key="org-9">
              Чувашский государственный институт имени Ульянова
            </option>
          </select>
        </div>
        <div className={styles.loginForm}>
          <input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            type="text"
            placeholder="Имя пользователя"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="pass"
            id="pass"
            placeholder="Пароль"
          />
          <button className={styles.resetPass}>Восстановить пароль</button>
          <button onClick={setAuth} className={styles.loginBtn}>
            Войти
          </button>
          {error ? (
            <span className={styles.errMsg}>Логин/Пароль не верны</span>
          ) : null}
        </div>
      </div>
    </div>
  );
});

export default AuthPage;
