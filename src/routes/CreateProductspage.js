import React from 'react';
import Productspage from './Productspage';

const CreateProductspage = () => {
  const [newProductName, setNewProductName] = React.useState('');
  const [newProductPrice, setNewProductPrice] = React.useState('');

  const [products, setProducts] = React.useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    addNewProduct(newProductName, newProductPrice);
    // Productspage(products);
  }

  function addNewProduct(name, price) {
    const productsCopy = Array.from(products);
    const createProduct = { id: products.length + 1, productName: name, productPrice: price }

    productsCopy.push(createProduct);
    setProducts(productsCopy);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(event) => setNewProductName(event.target.value)} />
        <input onChange={(event) => setNewProductPrice(event.target.value)} />
        <button type="submit"> Adicionar Produto </button>
      </form>
      {JSON.stringify(products, 3, null)}
    </div>
  );
};

export default CreateProductspage;
