import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Base/Footer";
import Header from "./Base/Header";
import Home from "./Pages/Home/Home";

export default function App() {
  const initTheme =
    localStorage.getItem("lightMode") === "true"
      ? true
      : localStorage.getItem("lightMode") === "false"
      ? false
      : true;

  const [lightMode, setLightMode] = useState(initTheme);
  useEffect(() => {
    if (lightMode) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("lightMode", true);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("lightMode", false);
    }
  }, [lightMode]);
  return (
    <BrowserRouter>
      <div className="switch">
        <input
          defaultChecked={initTheme}
          type="checkbox"
          onChange={() => {
            setLightMode(!lightMode);
          }}
        />
        <label></label>
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 
        <Route path="/user" element={"user"} />
        <Route path="/exchange" element={"exchange"} />
        <Route path="/my-cards" element={<MyCards></MyCards>} />
        <Route path="/cards-group" element={<CardGroup></CardGroup>} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
