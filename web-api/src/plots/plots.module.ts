import { Module } from '@nestjs/common';
import {PlotsController} from "./plots.controller";
import {PlotsService} from "./plots.service";
import {Plot} from "../model/plot.model";
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
    providers: [PlotsService],
    controllers: [PlotsController],
    imports: [
        SequelizeModule.forFeature([Plot]),
    ],
    exports: [
        PlotsService,
    ],
})
export class PlotsModule {}
