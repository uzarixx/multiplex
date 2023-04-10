import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Cinema } from '../cinema/cinema.model';
import { CinemaHallPlaces } from '../cinema-hall-places/cinema-hall-places.model';

interface ICinemaHall {
  cinemaId: number;
  hallNumber: number;
}

@Table({ tableName: 'cinema-hall' })
export class CinemaHall extends Model<CinemaHall, ICinemaHall> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @ForeignKey(() => Cinema)
  @Column({ type: DataType.INTEGER })
  cinemaId: number;
  @Column({ type: DataType.INTEGER })
  hallNumber: number;

  @BelongsTo(() => Cinema)
  cinema: Cinema;

  @HasMany(() => CinemaHallPlaces)
  cinemaHallPlaces: CinemaHallPlaces[];
}