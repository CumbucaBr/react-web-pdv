import React from 'react';

// Recebe as props de VALUE (Nome do produto), UpdateProductMethod (Método para atualizar nome) e RemoveProductMethod (Método para remover o produto)
const ProductListItem = ({ value, updateProductMethod, removeProductMethod }) => {
  return (
    <div>
      <input value={value} onChange={updateProductMethod} />
      <button onClick={removeProductMethod}>Remover Produto</button>
    </div>
  );
};

export default ProductListItem;
