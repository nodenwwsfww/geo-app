import {Controller, Get} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {DistrictsService} from "./districts.service";

@ApiTags('Districts')
@Controller('districts')
export class DistrictsController {
    constructor(private readonly districtsService: DistrictsService) {}

    @Get()
    getAllDistricts() {
        return this.districtsService.getAllDistricts();
    }

}

