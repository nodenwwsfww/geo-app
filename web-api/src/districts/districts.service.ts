import { Injectable } from '@nestjs/common';
import {District} from "../model/district.model";
import {InjectModel} from "@nestjs/sequelize";

@Injectable()
export class DistrictsService {
    constructor(
        @InjectModel(District)
        private districtsRepository: typeof District,
    ) {}

    async getAllDistricts(): Promise<District[]> {
        const districts = await this.districtsRepository.findAll();
        return districts;
    }


}
