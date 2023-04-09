import { ConfigService } from '@nestjs/config';
import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { City } from '../city/city.model';
import { Cinema } from '../cinema/cinema.model';

export const getSequelizeConfig = (configService: ConfigService): SequelizeModuleOptions => ({
  dialect: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DB'),
  autoLoadModels: true,
  logging: false,
  models: [
    City,
    Cinema,
  ],
});