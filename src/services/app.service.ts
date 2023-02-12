import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  /**
   * 
   * @returns 
   */
  getHealth(): string {
    return 'knights server up!';
  }
  
}
