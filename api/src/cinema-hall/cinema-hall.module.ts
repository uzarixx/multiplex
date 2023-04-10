import { Module } from '@nestjs/common';
import { CinemaHallService } from './cinema-hall.service';
import { CinemaHallController } from './cinema-hall.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CinemaHall } from './cinema-hall.model';
import { CinemaModule } from '../cinema/cinema.module';
import { CinemaHallPlacesBookingModule } from '../cinema-hall-places-booking/cinema-hall-places-booking.module';

@Module({
  providers: [CinemaHallService],
  controllers: [CinemaHallController],
  imports: [SequelizeModule.forFeature([CinemaHall]), CinemaModule, CinemaHallPlacesBookingModule],
  exports: [CinemaHallService],
})
export class CinemaHallModule {
}
