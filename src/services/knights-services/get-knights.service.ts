import { Injectable } from "@nestjs/common";
import { GetKnightRequestDto } from "src/dto/controllers/KnightRequest.dto";

@Injectable()
export class GetKnights{
    constructor(){}

    async listKnights(params: GetKnightRequestDto){
        
    }

    async listOne(idKnight: string){

    }
}