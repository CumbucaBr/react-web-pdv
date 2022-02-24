const Productspage = ({ productsList, setProductsList }) => {
  
  function updateProduct(index, inputName, value) {
    const productsCopy = Array.from(productsList);
    if (inputName === 'productName') productsCopy.splice(index, 1, { productName: value, productPrice: productsList[index].productPrice, productImage: productsList[index].productImage });
    else productsCopy.splice(index, 1, { productName: productsList[index].productName, productPrice: value, productImage: productsList[index].productImage });
    setProductsList(productsCopy);
  }

  function removeProduct(index) {
    const productsCopy = Array.from(productsList);
    productsCopy.splice(index, 1);
    setProductsList(productsCopy);
  }

  return (
    <div>
      EDITAR OU APAGAR PRODUTOS
      {productsList.length > 0 &&
        productsList?.map((product, index) => {
          return (
            <div key={index}>
              <input
                name="productName"
                value={product.productName}
                onChange={(event) => {
                  updateProduct(index, event.target.name, event.target.value);
                }}
              />
              <input
                name="productValue"
                value={product.productPrice}
                onChange={(event) =>
                  updateProduct(index, event.target.name, event.target.value)
                }
              />
              <div>
                <img src={product.productImage} alt="testimage" />
              </div>
              <button onClick={(index) => removeProduct(index)}>
                Remover Produto
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Productspage;
