import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { City } from './city.model';

@Module({
  providers: [CityService],
  controllers: [CityController],
  imports: [SequelizeModule.forFeature([City])],
  exports: [CityService]
})
export class CityModule {
}
