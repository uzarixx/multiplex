import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CinemaHallPlacesBooking } from './cinema-hall-places-booking.model';
import { CreateCinemaHallPlaceBookingDto } from './dto/create-cinema-hall-place-booking.dto';
import { CinemaHallPlacesService } from '../cinema-hall-places/cinema-hall-places.service';
import { Op } from 'sequelize';
import { dateBetween } from '../utils/dateBetween';
import { BadRequestException } from '../exceptions/httpExceptions/badRequest.exception';

@Injectable()
export class CinemaHallPlacesBookingService {
  constructor(
    @InjectModel(CinemaHallPlacesBooking) private readonly cinemaHallPlacesBookingRepository: typeof CinemaHallPlacesBooking,
    private readonly cinemaHallPlacesService: CinemaHallPlacesService,
  ) {
  }


  async createCinemaHallPlaceBooking(dto: CreateCinemaHallPlaceBookingDto) {
    await this.cinemaHallPlacesService.getHallPlaceById(dto.placeId);
    const { startDate, endDate } = dateBetween(dto.bookingTime);
    const findBooked = await this.cinemaHallPlacesBookingRepository.findOne({
      where: {
        placeId: dto.placeId,
        bookingTime: {
          [Op.between]: [startDate, endDate],
        },
      },
    });
    if (findBooked) {
      throw new BadRequestException('This place is booked');
    }
    return this.cinemaHallPlacesBookingRepository.create(dto);
  }

}
