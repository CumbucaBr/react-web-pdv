import TopBar from './components/TopBar/TopBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './routes/Homepage';
import CreateProductspage from './routes/CreateProductspage';
import Productspage from './routes/Productspage';
import React from 'react';


const App = () => {
  const [products, setProducts] = React.useState([]);

  return (
    <div>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="home" element={<Homepage />} />
          <Route path="createproducts" element={<CreateProductspage productsList={products} setProductsList={setProducts} />} />
          <Route path="listproducts" element={<Productspage productsList={products} setProductsList={setProducts} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
