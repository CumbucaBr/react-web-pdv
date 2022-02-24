import React from 'react';
import './CreateProductsPage.css';
import caneca from '../../images/caneca.jpg';

const CreateProductspage = ({ productsList, setProductsList }) => {
  const [newProductName, setNewProductName] = React.useState('');
  const [newProductPrice, setNewProductPrice] = React.useState('');
  const [newProductImage, setNewProductImage] = React.useState(caneca);

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
    window.alert('Produto criado com sucesso!');
  }

  const imageHandler = (event) => {
    const reader = new FileReader();
    reader.onload = () => setNewProductImage(reader.result);
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div className="main-container">
      <div className="central-container">
        <div className="central-container-effect">
          <form onSubmit={handleSubmit}>
            <div className="productinfo-container">
              <p>Nome do produto</p>
              <input
                placeholder="ex: Caneca Esportiva"
                onChange={(event) => setNewProductName(event.target.value)}
              />
            </div>
            <div className="productinfo-container">
              <p>Preço do produto</p>
              <input
                placeholder="ex: R$300,00"
                onChange={(event) => setNewProductPrice(event.target.value)}
              />
            </div>
            <div className="productimage-container">
              <p>Imagem do produto</p>
              <img src={newProductImage} alt="testimage" />
              <input
                id="file"
                type="file"
                accept="image/*"
                onChange={imageHandler}
              />
            </div>
            <div className="createproduct-container">
              <button className="createproduct-btn" type="submit">
                Criar novo produto
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProductspage;
