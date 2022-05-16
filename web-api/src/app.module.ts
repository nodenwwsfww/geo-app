import { Module } from '@nestjs/common';
import {Plot} from "./model/plot.model";
import {District} from "./model/district.model";
import { PlotsController } from './plots/plots.controller';
import { PlotsService } from './plots/plots.service';
import { PlotsModule } from './plots/plots.module';
import { DistrictsController } from './districts/districts.controller';
import { DistrictsModule } from './districts/districts.module';

import {SequelizeModule} from "@nestjs/sequelize";

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: "localhost",
      port: 3306,
      username: "root",
      password: "zeHQZEcsm5c50RjDMkJg",
      database: "geo",
      models: [Plot, District],
      autoLoadModels: true
    }),
    PlotsModule,
    DistrictsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}