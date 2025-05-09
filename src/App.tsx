import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Practice } from "./views";
import {
  useMediaQuery,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { useMemo } from "react";
import { Minmax } from "./components/Minmax";
import { Operator } from "./components/Operator";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice/*" element={<Practice />}>
            <Route path="operator" element={<Operator />} />
            <Route path="minmax" element={<Minmax />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
