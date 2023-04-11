import { Module } from '@nestjs/common';
import { CinemaHallPlacesController } from './cinema-hall-places.controller';
import { CinemaHallPlacesService } from './cinema-hall-places.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { CinemaHallPlaces } from './cinema-hall-places.model';
import { CinemaHallModule } from '../cinema-hall/cinema-hall.module';

@Module({
  controllers: [CinemaHallPlacesController],
  providers: [CinemaHallPlacesService],
  imports: [SequelizeModule.forFeature([CinemaHallPlaces]), CinemaHallModule],
  exports: [CinemaHallPlacesService],
})
export class CinemaHallPlacesModule {
}
