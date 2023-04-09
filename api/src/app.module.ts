import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { getSequelizeConfig } from './db/sequelizeConfig';
import { CityModule } from './city/city.module';
import { CinemaModule } from './cinema/cinema.module';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getSequelizeConfig,
    }),
    CityModule,
    CinemaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
