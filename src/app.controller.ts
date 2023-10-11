import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {


  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): Array<Object> {
    return this.appService.getListProducts();
  }
  @Get(':id')
  getProduct(@Param("id") id: string): any {
    return this.appService.getOneProduct(id);
  }

  @Post()
  sendData(@Body() datos): any {
    return this.appService.postProduct(datos);
  }

  @Put(':id')
  updateData(@Body() datos,@Param('id') id): any {
    return this.appService.putProduct(id,datos);
  }

  @Delete(':id')
  killData(@Param("id") id: string) {
    return this.appService.deleteProduct(id)
  }
}