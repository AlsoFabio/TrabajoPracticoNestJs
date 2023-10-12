import { Injectable, Param } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AppService {
  private products = [
    {
      id: uuidv4().toString(),
      name: "product 1",
      price: 1000,
      stock: 25,
    },
    {
      id: uuidv4().toString(),
      name: "product 2",
      price: 500,
      stock: 50,
    }
  ]
  getListProducts(): Array<Object> {
    try {
      return this.products;
    } catch (error) {
      throw new Error("Error en getListProduct" + JSON.stringify(error));
    }
  }

  getOneProduct(id): any {
    try {
      return this.products.find(product => product.id === parseInt(id));
    } catch (error) {
      throw new Error("Error en getOneProduct" + JSON.stringify(error));
    }
  }

  postProduct(datos): any {
    try {
      const datoFormateado={...datos,id:uuidv4().toString()}
      this.products.push(datoFormateado)
      return datoFormateado
    } catch (error) {
      throw new Error("Error en postProduct" + JSON.stringify(error));
    }
  }

  putProduct(id, datos): any {
    const indice = this.products.findIndex(product => product.id === parseInt(id));
    try {
      this.products[indice] = { ...this.products[indice], ...datos };
      return this.products[indice];
    } catch (error) {
      throw new Error("Error en putProduct" + JSON.stringify(error));
    }
  }

  deleteProduct(id): any {
    const indice = this.products.findIndex(product => product.id === parseInt(id));
    try {
      this.products.splice(indice, 1)
      return this.products
    } catch (error) {
      throw new Error("Error en deleteProduct" + JSON.stringify(error));
    }
  }
}