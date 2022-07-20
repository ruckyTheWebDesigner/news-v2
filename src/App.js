import React, { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage";
import { BsSun, BsFillMoonFill } from "react-icons/bs";

const localTheme = localStorage.getItem("theme");

function App() {
  const [mode, setmode] = useState(localTheme);

  const toogleMode = () => {
    if (mode === "light") {
      setmode("dark");
      localStorage.setItem("theme", "dark");
    } else if (mode === "dark") {
      setmode("light");

      localStorage.setItem("theme", "light");
    }
  };

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
