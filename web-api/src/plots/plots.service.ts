import {Injectable} from '@nestjs/common';
import {DelPlotsDto} from "./dto/delPlots.dto";
import {Plot} from "../model/plot.model";
import {InjectModel} from "@nestjs/sequelize";
import {GetPlotInfoDto} from "./dto/getPlotInfo.dto";
import {IPlotInfo} from "./interfaces/IPlotInfo";
import {CreatePlotDto} from "./dto/createPlotDto.dto";
import {QueryTypes} from "sequelize";

@Injectable()
export class PlotsService {
    constructor(
        @InjectModel(Plot)
        private plotsRepository: typeof Plot,
    ) {}


    async getPlotInfo(dto: GetPlotInfoDto): Promise<IPlotInfo> {
        const {bbl} = dto;
        const {area, district} = await this.plotsRepository.findOne({ where: { bbl } });

        return {
            area,
            district,
        }
    }

    async getMinMaxPlotArea() {
        const allPlots = await this.plotsRepository.findAll();
        const allAreas = allPlots.map((plot: Plot) => plot.area);
        return [Math.min(...allAreas), Math.max(...allAreas)];
    }

    async createPlot(dto: CreatePlotDto): Promise<Plot> {
        const plot = await this.plotsRepository.create(dto);
        return plot;
    }


    async decrementDistrictData(districts: string[]) {
        await this.plotsRepository.sequelize.query(`
            UPDATE districts SET plots_count = (plots_count - 1) WHERE district IN (:districts)`,
            {
                replacements: { districts },
                type: QueryTypes.UPDATE,
            }
        );
    }

    async delPlotsByAreaRange(dto: DelPlotsDto): Promise<void> {
        const {minValue, maxValue} = dto;

        interface IDistrictData {
            district: string
        }

        const districtsData: IDistrictData[] = await this.plotsRepository.sequelize.query(`
            SELECT district FROM plots WHERE area >= :minValue AND area <= :maxValue`,
            {
                replacements: {
                    minValue,
                    maxValue,
                },
                type: QueryTypes.SELECT,
            }
        );

        const districts: string[] = districtsData.map((data: IDistrictData) => data.district);
        await this.decrementDistrictData(districts);

        await this.plotsRepository.sequelize.query(`
            DELETE FROM plots WHERE area >= :minValue AND area <= :maxValue`,
            {
                replacements: {
                    minValue,
                    maxValue,
                },
                type: QueryTypes.DELETE,
            }
        );

    }

}
