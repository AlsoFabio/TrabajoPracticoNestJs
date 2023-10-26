import { Controller, Get, Param } from '@nestjs/common';

@Controller('app')
export class AppController {

  @Get('')
  getHello(@Param('name') name: string): string {
    return 'hola! ' + name;
  }

}
// import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {


//   constructor(private readonly appService: AppService) { }

//   @Get()
//   getHello(): Array<Object> {
//     return this.appService.getListProducts();
//   }
//   @Get(':id')
//   getProduct(@Param("id",new ParseUUIDPipe({version:"4"})) id: string): any {
//     return this.appService.getOneProduct(id);
//   }

//   @Post()
//   sendData(@Body() datos: Object): any {
//     return this.appService.postProduct(datos);
//   } 

//   @Put(':id')
//   updateData(@Param('id',new ParseUUIDPipe({version:"4"})) id: string, @Body() datos: Object): any {
//     return this.appService.putProduct(id, datos);
//   }

//   @Delete(':id')
//   killData(@Param("id",new ParseUUIDPipe({version:"4"})) id: string) {
//     return this.appService.deleteProduct(id)
//   }
// }