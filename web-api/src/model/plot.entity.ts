import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Plot {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    jsonValue: string
}