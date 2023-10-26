import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { MongoidPipe } from './pipe/mongoid';

@Controller('productos')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() product: CreateProductDto) {
    return this.productsService.create(product);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',MongoidPipe) id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':productId')
  update(@Param("productId",MongoidPipe) productId: string, @Body() { product_name }: UpdateProductDto) {
    this.productsService.update(productId, product_name)
  }

  @Delete(':id')
  remove(@Param('id',MongoidPipe) id: string) {
    return this.productsService.remove(id);
  }
}
