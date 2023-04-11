import { Module } from '@nestjs/common';
import { TechnologiesToCinemaService } from './technologies-to-cinema.service';
import { TechnologiesToCinemaController } from './technologies-to-cinema.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TechnologiesToCinema } from './technologies-to-cinema.model';
import { TechnologiesModule } from '../technologies/technologies.module';
import { CinemaModule } from '../cinema/cinema.module';

@Module({
  providers: [TechnologiesToCinemaService],
  controllers: [TechnologiesToCinemaController],
  imports: [SequelizeModule.forFeature([TechnologiesToCinema]), TechnologiesModule, CinemaModule],
})
export class TechnologiesToCinemaModule {
}
