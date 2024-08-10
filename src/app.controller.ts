import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('statistics')
export class statisticController {
  @Get()
  findAll() {
    return { message: 'This action returns all users' };
  }
}
