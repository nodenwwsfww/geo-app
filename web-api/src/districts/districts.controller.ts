import {Body, Controller, Get, Post} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {DistrictsService} from "./districts.service";
import {CreateDistrictDto} from "./dto/createDistrictDto.dto";

@ApiTags('Districts')
@Controller('districts')
export class DistrictsController {
    constructor(private readonly districtsService: DistrictsService) {
    }

    @Get()
    getAllDistricts() {
        return this.districtsService.getAllDistricts();
    }

    @Post('create')
    createPlot(@Body() dto: CreateDistrictDto) {
        return this.districtsService.createDistrict(dto);
    }

}

