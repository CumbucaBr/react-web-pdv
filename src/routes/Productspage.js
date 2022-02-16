import React from 'react';
import ProductListItem from '../components/ProductCreation/ProductListItem';

const Productspage = ({createdProducts}) => {
  const [products, setProducts] = React.useState(['']);

  React.useEffect(() => {
    setProducts(createdProducts);
  }, [createdProducts]);

  // TODO CORRIGIR UPDATE
  function updateProduct(event, index) {
    const productsCopy = Array.from(products);
    productsCopy.splice(index, 1, { id: index, value: event.target.value });
    setProducts(productsCopy);
  }

  function removeProduct(index) {
    const productsCopy = Array.from(products);
    productsCopy.splice(index, 1);
    setProducts(productsCopy);
  }

  return (
    <div>
      {/* <pre>{JSON.stringify(products, null, 3)};</pre> */}
      {products && products?.map((product, index) => {
        return (
          <ProductListItem
            key={index}
            productName={product.productName}
            productValue={product.productPrice}
            updateProductMethod={updateProduct}
            removeProductMethod={removeProduct}
          />
        );
      })}
    </div>
  );
};

export default Productspage;
