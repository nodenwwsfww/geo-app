import {Body, Controller, Delete, Get, Put} from '@nestjs/common';
import { AppService } from './app.service';
import {DelPlotsDto} from "./dto/delPlots.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllPlots() {
    return this.appService.getAllPlots();
  }

  @Get()
  getAllDistricts() {
    return this.appService.getAllDistricts();
  }

  @Delete()
  delPlots(@Body() dto: DelPlotsDto) {
    return this.appService.delPlots(dto);
  }

}
