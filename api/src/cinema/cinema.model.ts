import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { City } from '../city/city.model';

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
}