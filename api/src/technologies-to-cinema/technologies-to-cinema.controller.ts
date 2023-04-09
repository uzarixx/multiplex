import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { TechnologiesToCinemaService } from './technologies-to-cinema.service';
import { ValidationPipe } from '../pipes/validation.pipe';
import { CreateTechnologyToCinemaDto } from './dto/create-technology-to-cinema.dto';

@Controller('technologies-to-cinema')
export class TechnologiesToCinemaController {

  constructor(private readonly technologiesToCinemaService: TechnologiesToCinemaService) {
  }

  @UsePipes(ValidationPipe)
  @Post('/create')
  createTechnologyToCinema(@Body() dto: CreateTechnologyToCinemaDto) {
    return this.technologiesToCinemaService.createTechnologyToCinema(dto);
  }

}
