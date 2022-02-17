import React from 'react';

const CreateProductspage = ({ productsList, setProductsList }) => {
  const [newProductName, setNewProductName] = React.useState('');
  const [newProductPrice, setNewProductPrice] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    addNewProduct(newProductName, newProductPrice);
  }

  function addNewProduct(name, price) {
    const productsCopy = Array.from(productsList);
    const newProduct = { productName: name, productPrice: price };
    productsCopy.push(newProduct);
    setProductsList(productsCopy);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(event) => setNewProductName(event.target.value)} />
        <input onChange={(event) => setNewProductPrice(event.target.value)} />
        <button type="submit"> Adicionar Produto </button>
      </form>
      <pre>{JSON.stringify(productsList, null, 3)};</pre>
    </div>
  );
};

export default CreateProductspage;
