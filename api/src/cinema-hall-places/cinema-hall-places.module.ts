import { Module } from '@nestjs/common';
import { CinemaHallPlacesController } from './cinema-hall-places.controller';
import { CinemaHallPlacesService } from './cinema-hall-places.service';
import { CinemaHallModule } from '../cinema-hall/cinema-hall.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { CinemaHallPlaces } from './cinema-hall-places.model';

@Module({
  controllers: [CinemaHallPlacesController],
  providers: [CinemaHallPlacesService],
  imports: [SequelizeModule.forFeature([CinemaHallPlaces]), CinemaHallModule],
  exports: [CinemaHallPlacesService],
})
export class CinemaHallPlacesModule {
}
