import { Module } from '@nestjs/common';
import { CinemaHallPlacesBookingService } from './cinema-hall-places-booking.service';
import { CinemaHallPlacesBookingController } from './cinema-hall-places-booking.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CinemaHallPlacesBooking } from './cinema-hall-places-booking.model';

@Module({
  providers: [CinemaHallPlacesBookingService],
  controllers: [CinemaHallPlacesBookingController],
  imports: [SequelizeModule.forFeature([CinemaHallPlacesBooking])],
  exports: [CinemaHallPlacesBookingService]
})
export class CinemaHallPlacesBookingModule {
}
