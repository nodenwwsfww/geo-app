import { Module } from '@nestjs/common';
import { DistrictsService } from './districts.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {District} from "../model/district.model";
import {DistrictsController} from "./districts.controller";

@Module({
  providers: [DistrictsService],
  controllers: [DistrictsController],
  imports: [
    SequelizeModule.forFeature([District]),
  ],
  exports: [
    DistrictsService,
  ],
})
export class DistrictsModule {}
