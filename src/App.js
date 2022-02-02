import React from 'react';
import ListItem from './ProductListItem';
import NewProductInput from './NewProductInput';
import TopBar from './components/TopBar/TopBar';

const App = () => {
  const [products, setProducts] = React.useState([]);

  // MÉTODOS PARA MODIFICAR A ARRAY DE PRODUTOS 
  function addNewProduct(product) {
    const productsCopy = Array.from(products);
    productsCopy.push({ id: products.length, value: product });
    setProducts(productsCopy);
  }

  function updateProduct(event, index) {
    const productsCopy = Array.from(products);
    productsCopy.splice(index, 1, {id: index, value: event.target.value});
    setProducts(productsCopy);
  }

  function removeProduct(index) {
    const productsCopy = Array.from(products);
    productsCopy.splice(index, 1);
    setProducts(productsCopy);
  }

  return (
    <div className="app">
    <div className="top-bar">
      <TopBar />
    </div>
      <NewProductInput addNewItem={addNewProduct} />
      {products.map((product, index) => {
        return <ListItem key={index} value={product.value} updateProductMethod={updateProduct} removeProductMethod={removeProduct} />;
      })}
      <pre>
      {JSON.stringify(products, null, 3)};
      </pre>
    </div>
  );
};

export default App;
