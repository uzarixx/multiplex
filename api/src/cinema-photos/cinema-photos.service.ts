import { Injectable } from '@nestjs/common';
import { CinemaPhotos } from './cinema-photos.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCinemaPhotoDto } from './dto/create-cinema-photo.dto';
import { CinemaService } from '../cinema/cinema.service';
import { NotFoundException } from '../exceptions/httpExceptions/notFound.exception';

@Injectable()
export class CinemaPhotosService {

  constructor(@InjectModel(CinemaPhotos) private readonly cinemaPhotosRepository: typeof CinemaPhotos, private readonly cinemaService: CinemaService) {
  }

  async createCinemaPhoto(dto: CreateCinemaPhotoDto) {
    await this.cinemaService.findCinemaById(dto.cinemaId);
    return this.cinemaPhotosRepository.create(dto);
  }

  async deleteCinemaPhoto(id: number) {
    const cinemaPhoto = await this.cinemaPhotosRepository.findOne({ where: { id } });
    if (!cinemaPhoto) {
      throw new NotFoundException('Cinema photo is not a found');
    }
    await cinemaPhoto.destroy();
    return cinemaPhoto;
  }

}
