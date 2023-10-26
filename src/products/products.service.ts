import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {

  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  create(product:CreateProductDto) {
    return  this.productModel.create(product)
  }

  async findAll() {
    return await this.productModel.find().populate('product_category',{__v:0});
  }

  async findOne(id: string) {
    return await this.productModel.findById(id).populate('product_category',{__v:0});
  }

  async update(id: string, newText: String) {
    return await this.productModel.findByIdAndUpdate(id, {product_name: newText},{new: true});
  }

  async remove(id: string) {
    return await this.productModel.findByIdAndDelete(id);
  }
}
