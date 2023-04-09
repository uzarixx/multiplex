import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Cinema } from '../cinema/cinema.model';

interface ICinemaPhotos {
  imageLink: string;
}

@Table({ tableName: 'cinema-photos' })
export class CinemaPhotos extends Model<CinemaPhotos, ICinemaPhotos> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @ForeignKey(() => Cinema)
  @Column({ type: DataType.INTEGER })
  cinemaId: number;
  @Column({ type: DataType.STRING })
  imageLink: string;
}