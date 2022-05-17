import {Injectable} from '@nestjs/common';
import {District} from "../model/district.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateDistrictDto} from "./dto/createDistrictDto.dto";

@Injectable()
export class DistrictsService {
    constructor(
        @InjectModel(District)
        private districtsRepository: typeof District,
    ) {
    }

    async getAllDistricts(): Promise<District[]> {
        const districts = await this.districtsRepository.findAll();
        return districts;
    }

    async createDistrict(dto: CreateDistrictDto): Promise<District> {
        console.log(dto)
        const district = await this.districtsRepository.create(dto);
        return district;
    }


}
