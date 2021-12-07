import {ProductModel} from "../model/product.model";

export class ProductsService {
    getList(): ProductModel[] {
        var temp: ProductModel[] = [];

        for (let i = 0; i < 10; i++) {
            temp.push(new ProductModel(`Produto ${i}`, i * 2))
        }

        return temp;
    }
}
