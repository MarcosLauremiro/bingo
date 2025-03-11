import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { useEffect } from "react";
import { Game } from "../pages/Game";

const Middleware: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("@name-game") ? navigate("/jogo") : navigate("/");
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
            <Home />
          </>
        }
      />
      <Route
        path="/jogo"
        element={
          <>
            <Middleware />
            <Game />
          </>
        }
      />
    </Routes>
  );
};
