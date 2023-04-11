import { Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Cinema } from '../cinema/cinema.model';
import { ScheduleToHall } from '../schedule-to-hall/schedule-to-hall.model';


interface ISchedule {
  date: string;
  time: string;
  cinemaId: number;
  filmId: number;
}

@Table({ tableName: 'schedule' })
export class Schedule extends Model<Schedule, ISchedule> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @Column({ type: DataType.DATE })
  date: string;
  @Column({ type: DataType.STRING })
  time: string;
  @ForeignKey(() => Cinema)
  @Column({ type: DataType.INTEGER, allowNull: false })
  cinemaId: number;
  @Column({ type: DataType.INTEGER, allowNull: false })
  filmId: number;


  @HasMany(() => ScheduleToHall)
  scheduleToHall: ScheduleToHall[];
}