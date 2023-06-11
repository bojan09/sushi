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
        </Routes>
        <About />
        <Menu />
        <Food />
        <Services />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
