import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { City } from './city.model';
import { CreateCityDto } from './dto/create-city.dto';
import { NotFoundException } from '../exceptions/httpExceptions/notFound.exception';

@Injectable()
export class CityService {

  constructor(@InjectModel(City) private readonly cityRepository: typeof City) {
  }

  async createCity(dto: CreateCityDto) {
    const cityFind = await this.cityRepository.findOne({ where: { name: dto.name } });
    if (!cityFind) {
      return this.cityRepository.create({ name: dto.name });
    }
    return;
  }


  async getCinemaByCity(id: number) {
    const cinemas = await this.cityRepository.findOne({ where: { id }, include: { all: true } });
    if (!cinemas) {
      throw new NotFoundException('No one cinema found');
    }
    return cinemas;
  }


}
