import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Footer from './components/Footer';
import Announcement from './components/Announcement';
import Newsletter from './components/Newsletter';

const App = () => {
  return (
    <>
    <Announcement />
      <Navbar />
      <div className='container'>
        <Routes>
        <Route path='/' element={<Home/>} />
          <Route path='home' element={<Home/>} />
          <Route path='rgis' element={<Register/>} />
          <Route path='logn' element={<Login/>} />
          <Route path='product' element={<Product/>} />
          <Route path='list' element={<ProductList/>} />
          <Route path='crt' element={<Cart/>} />
        </Routes>
      </div>
      <Newsletter/>
      <Footer/>
    </>
  );
};

export default App;