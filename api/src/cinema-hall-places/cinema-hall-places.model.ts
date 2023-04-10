import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { CinemaHall } from '../cinema-hall/cinema-hall.model';
import { CinemaHallPlacesBooking } from '../cinema-hall-places-booking/cinema-hall-places-booking.model';

interface ICinemaHallPlaces {
  cinemaHallId: number,
  row: number,
  place: number,
  isLux: boolean,
  isAvailable: boolean,
  isInvalid: boolean,
  price: number,
  xPosition: number,
  yPosition: number,
}

@Table({ tableName: 'cinema-hall-places' })
export class CinemaHallPlaces extends Model<CinemaHallPlaces, ICinemaHallPlaces> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @ForeignKey(() => CinemaHall)
  @Column({ type: DataType.INTEGER })
  cinemaHallId: number;
  @Column({ type: DataType.INTEGER })
  row: number;
  @Column({ type: DataType.INTEGER })
  place: number;
  @Column({ type: DataType.BOOLEAN })
  isLux: boolean;
  @Column({ type: DataType.BOOLEAN })
  isAvailable: boolean;
  @Column({ type: DataType.BOOLEAN })
  isInvalid: boolean;
  @Column({ type: DataType.INTEGER })
  price: number;
  @Column({ type: DataType.FLOAT })
  xPosition: number;
  @Column({ type: DataType.FLOAT })
  yPosition: number;

  @BelongsTo(() => CinemaHall)
  cinemaHall: CinemaHall;

  @HasMany(() => CinemaHallPlacesBooking)
  cinemaHallPlacesBooking: CinemaHallPlacesBooking[];
}