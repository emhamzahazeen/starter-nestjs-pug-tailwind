import { IProfileService } from '../interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService implements IProfileService {
  getProfile(): Promise<string> {
    return Promise.resolve('hazeen');
  }
}
