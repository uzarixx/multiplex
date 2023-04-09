import { Module } from '@nestjs/common';
import { CinemaPhotosService } from './cinema-photos.service';
import { CinemaPhotosController } from './cinema-photos.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CinemaPhotos } from './cinema-photos.model';
import { CinemaModule } from '../cinema/cinema.module';

@Module({
  providers: [CinemaPhotosService],
  controllers: [CinemaPhotosController],
  imports: [SequelizeModule.forFeature([CinemaPhotos]), CinemaModule]
})
export class CinemaPhotosModule {}
