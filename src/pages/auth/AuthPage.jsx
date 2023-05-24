import React from "react";
import { useStore } from "../../store";
import logo from "../../assets/logo.svg";
import { observer } from "mobx-react-lite";

const AuthPage = observer(() => {
  const { appStore } = useStore();

  return (
    <div className="container">
      <img src={logo} alt="" />
      <h1>Электронный дневник</h1>
      <select>
        <option value="city-1" key="">
          Чувашская республика
        </option>
      </select>
      <select>
        <option value="" key="">Чебоксары</option>
        <option value="" key="">Новочебоксарск</option>
      </select>
      auth {appStore.auth ? "true" : "false"}
      <button onClick={() => appStore.setAuth()}>click</button>
    </div>
  );
});

export default AuthPage;
