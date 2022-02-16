const Productspage = ({ productsList, setProducts }) => {

  function updateProduct(event) {
    // const productsCopy = Array.from(productsList);
    // if (eventType === 'productName') {
    //   productsCopy.splice(index, 1, { id: index, productName: eventValue, productPrice; });

    // }
    // setProducts(productsCopy);
    console.log(event)
  }

  function removeProduct(index) {
    const productsCopy = Array.from(productsList);
    productsCopy.splice(index, 1);
    setProducts(productsCopy);
  }

  return (
    <div>
      {productsList.length > 0 &&
        productsList?.map((product, index) => {
          return (
            <div>
              <input name='productName' value={product.productName} onChange={(event) => {updateProduct(event );}} />
              <input name='productvalue' value={product.productPrice} onChange={(event) => updateProduct(index, event.target.name, event.target.value )} />
              <button onClick={() => removeProduct }>Remover Produto</button>
            </div>
          );
        })}
    </div>
  );
};

export default Productspage;
