import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";


@Table({tableName: 'districts'})
export class District extends Model<District> {
    @ApiProperty({example: '1', description: 'Uni id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({description: 'Json value'})
    @Column({type: DataType.JSON, allowNull: false})
    jsonValue: string;
}