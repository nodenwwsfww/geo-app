import {Body, Controller, Delete, Get, Post, Query} from '@nestjs/common';
import {DelPlotsDto} from "./dto/delPlots.dto";
import {PlotsService} from "./plots.service";
import {ApiTags} from "@nestjs/swagger";
import {CreatePlotDto} from "./dto/createPlotDto.dto";
import {GetPlotInfoDto} from "./dto/getPlotInfo.dto";

@ApiTags('Plots')
@Controller('plots')
export class PlotsController {
    constructor(private readonly plotsService: PlotsService) {}

    @Get('info')
    getPlotInfo(@Query() data: GetPlotInfoDto) {
        return this.plotsService.getPlotInfo(data);
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
