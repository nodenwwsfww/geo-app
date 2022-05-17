import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";


@Table({tableName: 'districts'})
export class District extends Model<District> {
    @ApiProperty({example: '1', description: 'Uni id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '60', description: "Plot's count"})
    @Column({type: DataType.INTEGER})
    plots_count: number;

    @ApiProperty({description: 'District name'})
    @Column({type: DataType.STRING, allowNull: false})
    district: string;
}