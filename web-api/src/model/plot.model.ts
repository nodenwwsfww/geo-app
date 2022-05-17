import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";


@Table({tableName: 'plots'})
export class Plot extends Model<Plot> {
    @ApiProperty({example: '1', description: 'Uni id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '1000000', description: 'Uni bbl number'})
    @Column({type: DataType.INTEGER, unique: true})
    bbl: number;

    @ApiProperty({example: '1000000', description: 'Area value'})
    @Column({type: DataType.INTEGER})
    area: number;

    @ApiProperty({description: 'Name of the district'})
    @Column({type: DataType.STRING, allowNull: false})
    district: string;

}