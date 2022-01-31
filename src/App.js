
import React from 'react';
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
import ProductCategoryList from './components/sections/product/ProductCategoryList';

function App() {
  return (
    <AppState>
      <Router>
        <Header />
        <MainContainer >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/*"  >
              <Route path=":category" element={<Products />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainContainer>
      </Router>
    </AppState>
  );
}

export default App;
