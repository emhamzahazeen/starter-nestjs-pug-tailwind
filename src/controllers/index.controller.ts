import { Controller, Get, Inject, Render } from '@nestjs/common';
import { IPROFILESERVICE, IProfileService } from '../interfaces';

@Controller()
export class IndexController {
  constructor(@Inject(IPROFILESERVICE) private readonly profileService: IProfileService) {}
  @Get()
  @Render('index')
  async root() {
    const profile = await this.profileService.getProfile();
    return { profile: profile };
  }
}
