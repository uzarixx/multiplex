import { Module } from '@nestjs/common';
import { CinemaHallPlacesBookingService } from './cinema-hall-places-booking.service';
import { CinemaHallPlacesBookingController } from './cinema-hall-places-booking.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CinemaHallPlacesBooking } from './cinema-hall-places-booking.model';
import { CinemaHallPlacesModule } from '../cinema-hall-places/cinema-hall-places.module';

@Module({
  providers: [CinemaHallPlacesBookingService],
  controllers: [CinemaHallPlacesBookingController],
  imports: [SequelizeModule.forFeature([CinemaHallPlacesBooking]), CinemaHallPlacesModule],
  exports: [CinemaHallPlacesBookingService],
})
export class CinemaHallPlacesBookingModule {
}
