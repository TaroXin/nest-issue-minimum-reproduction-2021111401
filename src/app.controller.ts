import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(
    @Query('pageIndex') pageIndex: number,
    @Query('pageSize') pageSize: number,
  ): string {
    console.log(typeof pageIndex, typeof pageSize);

    return this.appService.getHello();
  }
}
