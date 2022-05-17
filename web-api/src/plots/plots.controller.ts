import {Body, Controller, Delete, Get, Post} from '@nestjs/common';
import {DelPlotsDto} from "./dto/delPlots.dto";
import {PlotsService} from "./plots.service";
import {ApiTags} from "@nestjs/swagger";
import {GetPlotInfoDto} from "./dto/getPlotInfo.dto";
import {CreatePlotDto} from "./dto/createPlotDto.dto";

@ApiTags('Plots')
@Controller('plots')
export class PlotsController {
    constructor(private readonly plotsService: PlotsService) {}

    @Get('info')
    getPlotInfo(@Body() dto: GetPlotInfoDto) {
        return this.plotsService.getPlotInfo(dto);
    }

    @Get('min-max-area')
    getMinMaxPlotArea() {
        return this.plotsService.getMinMaxPlotArea();
    }

    @Post('create')
    createPlot(@Body() dto: CreatePlotDto) {
        return this.plotsService.createPlot(dto);
    }

    @Delete('delete')
    delPlots(@Body() dto: DelPlotsDto) {
        return this.plotsService.delPlotsByAreaRange(dto);
    }

}
