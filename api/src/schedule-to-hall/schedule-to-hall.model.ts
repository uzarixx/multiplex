import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { CinemaHall } from '../cinema-hall/cinema-hall.model';
import { Schedule } from '../schedule/schedule.model';

interface IScheduleToHall {
  scheduleId: number;
  cinemaHallId: number;
}

@Table({ tableName: 'schedule-to-hall' })
export class ScheduleToHall extends Model<ScheduleToHall, IScheduleToHall> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @ForeignKey(() => Schedule)
  @Column({ type: DataType.INTEGER })
  scheduleId: number;
  @ForeignKey(() => CinemaHall)
  @Column({ type: DataType.INTEGER })
  cinemaHallId: number;


  @BelongsTo(() => Schedule)
  schedule: Schedule;
}