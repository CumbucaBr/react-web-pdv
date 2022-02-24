import React from 'react';

const CreateProductspage = ({ productsList, setProductsList }) => {
  const [newProductName, setNewProductName] = React.useState('');
  const [newProductPrice, setNewProductPrice] = React.useState('');
  const [newProductImage, setNewProductImage] = React.useState(
    'https://upload.wikimedia.org/wikipedia/commons/6/60/W-200x200-300dpi.png',
  );

  function handleSubmit(event) {
    event.preventDefault();
    addNewProduct(newProductName, newProductPrice, newProductImage);
  }

  function addNewProduct(name, price, image) {
    const productsCopy = Array.from(productsList);
    const newProduct = {
      productName: name,
      productPrice: price,
      productImage: image,
    };
    productsCopy.push(newProduct);
    setProductsList(productsCopy);
  }

  const imageHandler = (event) => {
    const reader = new FileReader();
    reader.onload = () => setNewProductImage(reader.result);
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div>
      CRIAR PRODUTOS
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={(event) => setNewProductName(event.target.value)} />
        </div>
        <div>
          <input onChange={(event) => setNewProductPrice(event.target.value)} />
        </div>
        <div>
          <img src={newProductImage} alt="testimage" />
          <input type="file" accept="image/*" onChange={imageHandler} />
        </div>
        <div>
          <button type="submit"> Adicionar Produto </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProductspage;
