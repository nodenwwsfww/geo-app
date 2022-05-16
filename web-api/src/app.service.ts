import {Injectable} from '@nestjs/common';
import {DelPlotsDto} from "./dto/delPlots.dto";
import {District} from "./model/district.entity";
import {Plot} from "./model/plot.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
@Injectable()
export class AppService {
  constructor(
      @InjectRepository(Plot)
      @InjectRepository(District)
      private plotsRepository: Repository<Plot>,
      private districtsRepository: Repository<District>,
  ) {}

  async getAllPlots(): Promise<Plot[]> {
    return this.plotsRepository.find();
  }

  async getAllDistricts(): Promise<District[]> {
    return this.districtsRepository.find();
  }

  async delPlots(dto: DelPlotsDto): Promise<void> {
    const {plots} = dto;
    await this.plotsRepository.remove(plots);
  }
}
