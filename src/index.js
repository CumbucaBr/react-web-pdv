import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './routes/Homepage';
import CreateProductspage from './routes/CreateProductspage';
import Productspage from './routes/Productspage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
          <Route path="home" element={<Homepage />} />
          <Route path="createproducts" element={<CreateProductspage />} />
          <Route path="listproducts" element={<Productspage />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
