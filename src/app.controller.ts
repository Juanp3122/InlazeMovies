import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  logIn(): string {
    return this.appService.getHello();
  }

  @Get('sign-up')
  signUp(): string {
    return 'sign-up';
  }
}
