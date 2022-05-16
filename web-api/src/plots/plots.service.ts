import {Injectable} from '@nestjs/common';
import {DelPlotsDto} from "./dto/delPlots.dto";
import {Plot} from "../model/plot.model";
import {InjectModel} from "@nestjs/sequelize";

@Injectable()
export class PlotsService {
    constructor(
        @InjectModel(Plot)
        private plotsRepository: typeof Plot,
    ) {}

    async getAllPlots(): Promise<Plot[]> {
        return this.plotsRepository.findAll();
    }

    async delPlots(dto: DelPlotsDto): Promise<void> {
        const {plots} = dto;
        await Promise.all(plots.map(async (plot) => plot.destroy()));
    }
}
