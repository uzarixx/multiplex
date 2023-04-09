import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Technologies } from '../technologies/technologies.model';
import { Cinema } from '../cinema/cinema.model';

interface ITechnologiesToCinema {
  technologiesId: number;
  cinemaId: number;
}

@Table({ tableName: 'Technologies-To-Cinema' })
export class TechnologiesToCinema extends Model<TechnologiesToCinema, ITechnologiesToCinema> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @ForeignKey(() => Technologies)
  @Column({ type: DataType.INTEGER })
  technologiesId: number;
  @ForeignKey(() => Cinema)
  @Column({ type: DataType.INTEGER })
  cinemaId: number;


  @BelongsTo(() => Technologies)
  technologies: Technologies;
}