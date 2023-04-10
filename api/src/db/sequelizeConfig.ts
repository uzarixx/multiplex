import { ConfigService } from '@nestjs/config';
import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { City } from '../city/city.model';
import { Cinema } from '../cinema/cinema.model';
import { CinemaPhotos } from '../cinema-photos/cinema-photos.model';
import { Technologies } from '../technologies/technologies.model';
import { TechnologiesToCinema } from '../technologies-to-cinema/technologies-to-cinema.model';
import { CinemaHall } from '../cinema-hall/cinema-hall.model';
import { CinemaHallPlaces } from '../cinema-hall-places/cinema-hall-places.model';
import { CinemaHallPlacesBooking } from '../cinema-hall-places-booking/cinema-hall-places-booking.model';

export const getSequelizeConfig = (configService: ConfigService): SequelizeModuleOptions => ({
  dialect: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DB'),
  autoLoadModels: true,
  logging: false,
  models: [
    City,
    Cinema,
    CinemaHall,
    Technologies,
    CinemaPhotos,
    CinemaHallPlaces,
    TechnologiesToCinema,
    CinemaHallPlacesBooking,
  ],
});