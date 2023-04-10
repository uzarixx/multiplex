import { Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { City } from '../city/city.model';
import { CinemaPhotos } from '../cinema-photos/cinema-photos.model';
import { TechnologiesToCinema } from '../technologies-to-cinema/technologies-to-cinema.model';
import { CinemaHall } from '../cinema-hall/cinema-hall.model';

interface ICinema {
  name: string;
}

@Table({ tableName: 'cinema' })
export class Cinema extends Model<Cinema, ICinema> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @ForeignKey(() => City)
  @Column({ type: DataType.INTEGER })
  cityId: number;
  @Column({ type: DataType.STRING })
  name: string;
  @Column(({ type: DataType.STRING }))
  address: string;
  @HasMany(() => CinemaPhotos)
  cinemaPhotos: CinemaPhotos[];

  @HasMany(() => TechnologiesToCinema)
  technologiesToCinema: TechnologiesToCinema[];

  @HasMany(() => CinemaHall)
  cinemaHall: CinemaHall[];
}