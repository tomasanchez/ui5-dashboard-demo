import React from "react";
import { ThemeProvider } from "@ui5/webcomponents-react";
import { HashRouter } from "react-router-dom";
import { MyApp } from "./MyApp";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <MyApp />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
