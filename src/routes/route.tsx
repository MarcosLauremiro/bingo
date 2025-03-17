import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { useEffect } from "react";
import { Home } from "../pages/Home";
import { Game } from "../pages/Game";

const Middleware: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("@name-game") ? navigate("/home") : navigate("/");
  }, [navigate]);

  return null;
};

export const RouterMain: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Middleware />
            <Login />
          </>
        }
      />
      <Route
        path="/home"
        element={
          <>
            <Middleware />
            <Home />
          </>
        }
      />
      <Route
        path="/game"
        element={
          <>
            <Game />
          </>
        }
      />
    </Routes>
  );
};
