import {Body, Controller, Delete, Get} from '@nestjs/common';
import {DelPlotsDto} from "./dto/delPlots.dto";
import {PlotsService} from "./plots.service";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Plots')
@Controller('plots')
export class PlotsController {
    constructor(private readonly plotsService: PlotsService) {}

    @Get()
    getAllPlots() {
        return this.plotsService.getAllPlots();
    }

    @Delete()
    delPlots(@Body() dto: DelPlotsDto) {
        return this.plotsService.delPlots(dto);
    }

}
