import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CinemaHall } from './cinema-hall.model';
import { CreateCinemaHallDto } from './dto/create-cinema-hall.dto';
import { BadRequestException } from '../exceptions/httpExceptions/badRequest.exception';
import { CinemaService } from '../cinema/cinema.service';
import { NotFoundError } from 'rxjs';
import { CinemaHallPlaces } from '../cinema-hall-places/cinema-hall-places.model';
import { CinemaHallPlacesBookingService } from '../cinema-hall-places-booking/cinema-hall-places-booking.service';
import { NotFoundException } from '../exceptions/httpExceptions/notFound.exception';

interface CinemaHallPlaceWithBooking extends CinemaHallPlaces {
  booked: boolean;
}


@Injectable()
export class CinemaHallService {

  constructor(
    @InjectModel(CinemaHall) private readonly cinemaHallRepository: typeof CinemaHall,
    private readonly cinemaService: CinemaService,
    private readonly cinemaHallPlacesBookingService: CinemaHallPlacesBookingService,
  ) {
  }

  async createCinemaHall(dto: CreateCinemaHallDto) {
    const cinemaHall = await this.cinemaHallRepository.findOne({
      where: {
        cinemaId: dto.cinemaId,
        hallNumber: dto.hallNumber,
      },
    });
    const cinema = await this.cinemaService.findCinemaById(dto.cinemaId);
    if (!cinemaHall && cinema) {
      return this.cinemaHallRepository.create(dto);
    }
    throw new BadRequestException('This cinema hall already exist, or this cinema is not exist');
  }

  async getCinemaById(id: number) {
    const cinemaHall = await this.cinemaHallRepository.findOne({ where: { id }});
    if (!cinemaHall) {
      throw new NotFoundException('Cinema hall is not exist');
    }
    return cinemaHall;
  }

  async getCinemaHallPlaces(id: number, date: string) {
    const cinemaPlaces = await this.cinemaHallRepository.findOne({
      where: { id },
      include: [{
        model: CinemaHallPlaces,
      }],
    });
    const cinemaPlacesBooking = await this.cinemaHallPlacesBookingService.getBookingPlaces(cinemaPlaces.cinemaHallPlaces.map((el) => el.id), date);
    const allPlaces = cinemaPlaces.cinemaHallPlaces.map((el) => {
      const isBooked = cinemaPlacesBooking.some((booking) => booking.placeId === el.id);
      return ({
        ...el.dataValues,
        booked: isBooked,
      });
    });
    return allPlaces as CinemaHallPlaceWithBooking[];
  }


}
