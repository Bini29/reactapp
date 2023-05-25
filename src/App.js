import { useEffect, useState } from "react";
import AuthPage from "./pages/AuthPage/AuthPage";
import Journal from "./pages/Journal/Journal";
import Reports from "./pages/Reports/Reports";
import Schedule from "./pages/Schedule/Schedule";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Cards from "./components/Cards/Cards";
import NoMatch from "./pages/NoMatch/NoMatch";
import { useStore } from "./store/index";

function App() {
  let navigate = useNavigate();
  const { appStore } = useStore();

  useEffect(() => {
    if (appStore.auth) {
    } else {
      navigate("/auth");
    }
  }, []);

  return (
    <div className="App">
      {appStore.auth ? <Navigation /> : null}
      <Routes>
        <Route path="/" element={<Cards />}></Route>
        <Route path="/jornal" element={<Journal />}></Route>
        <Route path="/auth" element={<AuthPage />}></Route>
        <Route path="/reports" element={<Reports />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </div>
  );
}

export default App;
