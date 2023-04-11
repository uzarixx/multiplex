import { Module } from '@nestjs/common';
import { TechnologiesService } from './technologies.service';
import { TechnologiesController } from './technologies.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Technologies } from './technologies.model';

@Module({
  providers: [TechnologiesService],
  controllers: [TechnologiesController],
  imports: [SequelizeModule.forFeature([Technologies])],
  exports: [TechnologiesService],
})
export class TechnologiesModule {
}
