import {ProductModel} from "../model/product.model";

export class PDVService {
    private shoppingCart: ProductModel[] = [];

    add(product: ProductModel, qtde: number) {
        for (let i = 1; i <= qtde; i++) {
            this.shoppingCart.push(product);
        }

        console.log("add product", product)
    }

    close(){

    }
}
