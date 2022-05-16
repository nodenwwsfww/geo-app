import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class District {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    jsonValue: string
}