const Productspage = ({ productsList, setProductsList }) => {
  function updateProduct(index, inputName, value) {
    const productsCopy = Array.from(productsList);
    if (inputName === 'productName')
      productsCopy.splice(index, 1, {
        productName: value,
        productPrice: productsList[index].productPrice,
      });
    else
      productsCopy.splice(index, 1, {
        productName: productsList[index].productName,
        productPrice: value,
      });
    setProductsList(productsCopy);
  }

  function removeProduct(index) {
    const productsCopy = Array.from(productsList);
    productsCopy.splice(index, 1);
    setProductsList(productsCopy);
  }

  return (
    <div>
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
                name="productvalue"
                value={product.productPrice}
                onChange={(event) =>
                  updateProduct(index, event.target.name, event.target.value)
                }
              />
              <button onClick={(index) => removeProduct(index)}>
                Remover Produto
              </button>
              <pre>{JSON.stringify(productsList, null, 3)};</pre>
            </div>
          );
        })}
    </div>
  );
};

export default Productspage;
