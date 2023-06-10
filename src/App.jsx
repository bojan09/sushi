import React from "react";

// react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// components
import { Navbar, Footer } from "./components";

// pages
import { Home, About, Menu, Food, Services } from "./pages";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/food" exact element={<Food />} />
          <Route path="/services" exact element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
