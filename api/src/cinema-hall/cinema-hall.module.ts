import { Module } from '@nestjs/common';
import { CinemaHallService } from './cinema-hall.service';
import { CinemaHallController } from './cinema-hall.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CinemaHall } from './cinema-hall.model';
import { CinemaModule } from '../cinema/cinema.module';

@Module({
  providers: [CinemaHallService],
  controllers: [CinemaHallController],
  imports: [SequelizeModule.forFeature([CinemaHall]), CinemaModule],
  exports: [CinemaHallService],
})
export class CinemaHallModule {
}
