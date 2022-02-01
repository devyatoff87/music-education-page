
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from "./components/pages/home"
import About from "./components/pages/about"
import Products from "./components/pages/products"
import Contact from "./components/pages/contact"
import Header from './components/sections/header/Header';
import AppState from './context/app-state';
import MainContainer from './components/layout/MainContainer';
import { fetchData, setItemsToLocalStorage } from './helpers/helpers';
import products from "./data/products_DATA"

function App() {
  return (
    <AppState>
      <Router>
        <Header />
        <MainContainer >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products/*" element={<Products />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<div>Error 404</div>} />
          </Routes>
        </MainContainer>
      </Router>
    </AppState>
  )
}

export default App;
