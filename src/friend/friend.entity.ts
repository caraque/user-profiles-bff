import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, MaxLength } from 'class-validator';

@Entity('friend')
export class Friend {
  @PrimaryGeneratedColumn()
  id: number;

  @MaxLength(50, { groups: ['add'] })
  @Column({ length: 50 })
  name: string;

  @MaxLength(50, { groups: ['add'] })
  @Column({ length: 50 })
  lastname: string;

  @MaxLength(15, { groups: ['add'] })
  @Column({ length: 15 })
  cell: string;

  @MaxLength(150, { groups: ['add', 'delete'] })
  @IsEmail()
  @Column({ length: 150 })
  email: string;

  @MaxLength(150, { groups: ['add'] })
  @Column({ length: 150 })
  imageUrl: string;
}
