import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ProductModel} from "./model/product.model";
import {ProductsService} from "./services/products.service";
import {PDVService} from "./services/pdv.service";

function App() {

    const [products, setProducts] = useState<ProductModel[]>([]);
    const productService = new ProductsService();
    const pdvService = new PDVService();

    useEffect(() => {
        setProducts(productService.getList());
    });

    const addCart = (product: ProductModel) => {
        pdvService.add(product, 1);
    }

    const renderList = () => {
        return products.map((product: ProductModel) => {
            return (
                <tr>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                        <button onClick={() => {
                            addCart(product)
                        }}>
                            adicionar
                        </button>
                    </td>
                </tr>
            )
        });
    }


    return (
        <div className="App">
            <table>
                {renderList()}
            </table>
        </div>
    );
}

export default App;
