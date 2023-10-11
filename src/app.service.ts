import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class AppService {
  private products = [
    {
      id: 1,
      name: "product 1",
      price: 1000,
      stock: 25,
    },
    {
      id: 2,
      name: "product 2",
      price: 500,
      stock: 50,
    }
  ]
  getListProducts(): Array<Object> {
    return this.products;
  }

  getOneProduct(id): any {
    return this.products.find(product => product.id === parseInt(id));
  }

  postProduct(datos): any {
    this.products.push(datos)
    return datos
  }

  putProduct(id, datos): any {
    const indice = this.products.findIndex(product => product.id === parseInt(id));
    return Object.assign(this.products[indice], datos)
  }

  deleteProduct(id): any {
    this.products.splice(this.products.findIndex(obj => obj.id === parseInt(id)), 1)
    return this.products
  }
}