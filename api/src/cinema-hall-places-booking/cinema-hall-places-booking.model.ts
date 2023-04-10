import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { CinemaHallPlaces } from '../cinema-hall-places/cinema-hall-places.model';

interface ICinemaHallPlacesBooking {
  placeId: number;
  bookingTime: string;
}

@Table({ tableName: 'cinema-hall-places-booking' })
export class CinemaHallPlacesBooking extends Model<CinemaHallPlacesBooking, ICinemaHallPlacesBooking> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @ForeignKey(() => CinemaHallPlaces)
  @Column({ type: DataType.INTEGER })
  placeId: number;
  @Column({ type: DataType.DATE })
  bookingTime: string;

  @BelongsTo(() => CinemaHallPlaces)
  cinemaHallPlaces: CinemaHallPlaces;
}