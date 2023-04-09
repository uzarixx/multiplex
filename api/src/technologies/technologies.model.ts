import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { TechnologiesToCinema } from '../technologies-to-cinema/technologies-to-cinema.model';

interface ITechnologies {
  name: string;
  description: string;
  imageLink: string;
}

@Table({ tableName: 'Technologies' })
export class Technologies extends Model<Technologies, ITechnologies> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @Column({ type: DataType.STRING })
  name: string;
  @Column({ type: DataType.STRING })
  description: string;
  @Column({ type: DataType.STRING })
  imageLink: string;

  @HasMany(() => TechnologiesToCinema)
  technologiesToCinema: TechnologiesToCinema[];
}