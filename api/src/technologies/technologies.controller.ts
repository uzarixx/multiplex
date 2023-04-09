import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { TechnologiesService } from './technologies.service';
import { CreateTechnologyDto } from './dto/create-technology.dto';
import { ValidationPipe } from '../pipes/validation.pipe';

@Controller('technologies')
export class TechnologiesController {
  constructor(private readonly technologiesService: TechnologiesService) {
  }

  @UsePipes(ValidationPipe)
  @Post('/create')
  createTechnology(@Body() dto: CreateTechnologyDto) {
    return this.technologiesService.createTechnology(dto);
  }
}
