import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CinemaHallPlacesBooking } from './cinema-hall-places-booking.model';
import { CreateCinemaHallPlaceBookingDto } from './dto/create-cinema-hall-place-booking.dto';
import { Op } from 'sequelize';
import { NotFoundError } from 'rxjs';

@Injectable()
export class CinemaHallPlacesBookingService {

  constructor(@InjectModel(CinemaHallPlacesBooking) private readonly cinemaHallPlacesBookingRepository: typeof CinemaHallPlacesBooking) {
  }


  async createCinemaHallPlaceBooking(dto: CreateCinemaHallPlaceBookingDto) {
    return this.cinemaHallPlacesBookingRepository.create(dto);
  }

  async getBookingPlaces(cinemaHallId: number[], date: string) {
    const today = new Date(date);
    const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    const cinemaHallPlaces = await this.cinemaHallPlacesBookingRepository.findAll({
      where: {
        placeId: cinemaHallId,
        bookingTime: {
          [Op.between]: [startDate, endDate],
        },
      },
    });
    if (!cinemaHallPlaces) {
      return;
    }
    return cinemaHallPlaces;
  }

}
