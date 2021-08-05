import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { ServiceConfigModule } from './config/config.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { Controllers } from './controllers';
import { Services } from './services';
import { IPROFILESERVICE } from './interfaces';

@Module({
  imports: [ServiceConfigModule, HttpModule],
  controllers: [...Controllers],
  providers: [
    {
      provide: IPROFILESERVICE,
      useClass: Services[0],
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('');
  }
}
