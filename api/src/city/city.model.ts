import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Cinema } from '../cinema/cinema.model';

interface ICity {
  name: string;
}

@Table({ tableName: 'city' })
export class City extends Model<City, ICity> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @Column({ type: DataType.STRING, unique: true })
  name: string;
  @HasMany(() => Cinema)
  cinema: Cinema[];
}