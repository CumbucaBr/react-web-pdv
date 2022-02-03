import React from 'react';

// Ao digitar as infos no input, ativa a função de setNewProduct que atualiza o Hook de novo produto.
// Ao dar submit no formulário, ativa a função handleSubmit que joga o Hook de novo produto para dentro do método de AddNewItem (adicionar novo produto na array de Produtos)
const NewProductInput = ({ addNewItem }) => {
  const [newProduct, setNewProduct] = React.useState('');

  function setProductInHook(event) {
    setNewProduct(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addNewItem(newProduct);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={setProductInHook} />
        <button type="submit"> Adicionar Produto </button>
      </form>
    </div>
  );
};

export default NewProductInput;
