import { Module } from '@nestjs/common';
import { CinemaService } from './cinema.service';
import { CinemaController } from './cinema.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cinema } from './cinema.model';
import { CityModule } from '../city/city.module';

@Module({
  providers: [CinemaService],
  controllers: [CinemaController],
  imports: [SequelizeModule.forFeature([Cinema]), CityModule],
})
export class CinemaModule {
}
