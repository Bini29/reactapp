import { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import AuthPage from "./pages/Auth/AuthPage";
import Journal from "./pages/Journal/Journal";
import Reports from "./pages/Reports/Reports";
import Schedule from "./pages/Schedule/Schedule";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

function App() {
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      console.log("11111111");
    } else {
      console.log("11122222211111");
      navigate("/auth");
    }
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/jornal" element={<Journal />}></Route>
        <Route path="/auth" element={<AuthPage />}></Route>
        <Route path="/reports" element={<Reports />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
      </Routes>
    </div>
  );
}

export default App;
