import { Injectable } from '@nestjs/common';
// service is dame as providers in nestjs
// All the service meathods are here with its implementation

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Dunia';
  }
}
