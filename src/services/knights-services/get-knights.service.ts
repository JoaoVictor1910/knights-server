import { Injectable } from "@nestjs/common";
import { GetKnightRequestDto } from "src/dto/controllers/KnightRequest.dto";
import { MongoQueries } from "src/providers/mongodb/mongo-queries.provider";
import { Attributes } from 'src/models/knights/knights.schema';
import { AttributesModEnum } from "src/enums/attributes-mod.enum";
import { GetKnightsResponse } from "src/dto/services/get-knights.dto";

@Injectable()
export class GetKnights{
    constructor(
        private readonly mongodb: MongoQueries
    ){}

    async listKnights(params: GetKnightRequestDto): Promise<GetKnightsResponse[]>{
        
        try {
            let filter: {};

            if(params && params.filter){
                // se o cavaleiro tem mais de 30 anos, ele já é considerado um herói
                let today = new Date();
                let minimumBirthday = new Date(today.setFullYear(today.getFullYear() - 30))
                filter = { birthday: { $lt: minimumBirthday } }
            }

            let data = await this.mongodb.find(filter);

            return await this.prepareData(data);
            
        } catch (error) {
            throw new Error(error);
        }
    }

    async listOne(idKnight: string): Promise<GetKnightsResponse[]>{

        try {
            let filter = {_id: { $eq: idKnight}};

            let data = await this.mongodb.findOne(filter);

            return await this.prepareData([data]);

        } catch (error) {
            throw new Error(error);
        }

    }

    async viewKnight(idKnight: string): Promise<GetKnightsResponse[]>{

        try {
            let filter = {_id: { $eq: idKnight}};

            let data = await this.mongodb.findOne(filter);

            return [data]

        } catch (error) {
            throw new Error(error);
        }

    }

    async prepareData(data: Array<any>): Promise<any[]> {
        const _self = this;

        try {
            if(data.length){
                let mapped = data.map((object) => {
                    let modAttr = _self.modAttributes(object.attributes[0]);
                    let weaponMod = object.weapons.find(ele => ele.equipped == true)?.mod || 0;
                    let attack = (10 + modAttr) + weaponMod;
        
                    let age = new Date().getFullYear() - new Date(object.birthday).getFullYear();
                    let exp = Math.floor((age - 7) * Math.pow(22, 1.45));
                    return {
                        id: object._id,
                        name: object.name,
                        age,
                        weapons: object.weapons.length,
                        attribute: object.keyAttribute,
                        attack,
                        exp
                    } as GetKnightsResponse;
                })

                return mapped;
            }
        } catch (error) {
            throw error;
        }
    }

    modAttributes(attributes: Attributes): number {
        try {
            if(attributes){
                let allAttr = Object.values(Object.values(attributes)[4])
                let removeId = allAttr.pop()
                let sum = Number(allAttr.reduce((acc: number, value: number) => acc + value, 0));
    
                for (const mod in AttributesModEnum) {
                    if (sum >= AttributesModEnum[mod].range[0] && sum <= AttributesModEnum[mod].range[1]) {
                        return AttributesModEnum[mod].value;
                    }
                }
            }
        } catch (error) {
            throw error;
        }
    }
}