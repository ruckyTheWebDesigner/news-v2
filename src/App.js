import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage";
import { BsSun, BsFillMoonFill } from "react-icons/bs";

const localTheme = localStorage.getItem("theme");

function App() {
  const [mode, setmode] = useState(localTheme || "light");

  const bodybg = document.querySelector("body");
  const htmlbg = document.querySelector("html");

  const toogleMode = () => {
    if (mode === "light") {
      setmode("dark");
      bodybg.style.backgroundColor = "#1a1a1a";
      bodybg.style.color = "#fff";
      // htmlbg.style.backgroundColor = "#1a1a1a";
      localStorage.setItem("theme", "dark");
    } else {
      setmode("light");
      bodybg.style.backgroundColor = "#fafafa";
      bodybg.style.color = "#000";
      localStorage.setItem("theme", "light");
    }
  };

  const theme = createTheme({
    palette: {
      mode: mode === "light" ? "light" : "dark",
    },
  });

  useEffect(() => {}, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <HomePage
                button={
                  <button onClick={toogleMode}>
                    {mode === "light" ? <BsSun /> : <BsFillMoonFill />}
                  </button>
                }
              />
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
