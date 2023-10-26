import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Model } from 'mongoose';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectModel(Category.name) private categoriesModel: Model<Category>
  ) { }

  create(category: CreateCategoryDto) {
    return this.categoriesModel.create(category)
  }

  findAll() {
    return this.categoriesModel.find();
  }

  findOne(categories_id: string) {
    return this.categoriesModel.findById(categories_id);
  }

  async update(categories_id: string, updateCategoryDto: UpdateCategoryDto) {

    await this.findOne(categories_id)

    return this.categoriesModel.findByIdAndUpdate(categories_id, updateCategoryDto, {new: true});
  }

  remove(categories_id: string) {
    return this.categoriesModel.findByIdAndDelete(categories_id);
  }
}
