import { Module } from '@nestjs/common';
import { TechnologiesToCinemaService } from './technologies-to-cinema.service';
import { TechnologiesToCinemaController } from './technologies-to-cinema.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TechnologiesToCinema } from './technologies-to-cinema.model';

@Module({
  providers: [TechnologiesToCinemaService],
  controllers: [TechnologiesToCinemaController],
  imports: [SequelizeModule.forFeature([TechnologiesToCinema])],
})
export class TechnologiesToCinemaModule {
}
