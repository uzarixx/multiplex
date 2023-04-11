import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { getSequelizeConfig } from './db/sequelizeConfig';
import { CityModule } from './city/city.module';
import { CinemaModule } from './cinema/cinema.module';
import { CinemaPhotosModule } from './cinema-photos/cinema-photos.module';
import { TechnologiesModule } from './technologies/technologies.module';
import { TechnologiesToCinemaModule } from './technologies-to-cinema/technologies-to-cinema.module';
import { CinemaHallModule } from './cinema-hall/cinema-hall.module';
import { CinemaHallPlacesModule } from './cinema-hall-places/cinema-hall-places.module';
import { CinemaHallPlacesBookingModule } from './cinema-hall-places-booking/cinema-hall-places-booking.module';
import { ScheduleModule } from './schedule/schedule.module';
import { ScheduleToHallModule } from './schedule-to-hall/schedule-to-hall.module';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getSequelizeConfig,
    }),
    CityModule,
    CinemaModule,
    CinemaPhotosModule,
    TechnologiesModule,
    TechnologiesToCinemaModule,
    CinemaHallModule,
    CinemaHallPlacesModule,
    CinemaHallPlacesBookingModule,
    ScheduleModule,
    ScheduleToHallModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
