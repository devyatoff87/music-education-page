
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/pages/home"
import About from "./components/pages/about"
import Products from "./components/pages/products"
import Contact from "./components/pages/contact"
import Header from './components/sections/header/Header';
import AppState from './context/app-state';
import CloseHoc from "./components/simple/close-hoc/CloseHoc"

function App() {
  return (
    <AppState>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/*" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </AppState>
  );
}

export default App;
