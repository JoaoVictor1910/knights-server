import { Injectable } from "@nestjs/common";
import { Knights } from "src/models/knights/knights.schema";
import { MongoQueries } from "src/providers/mongodb/mongo-queries.provider";
import { CreateKnightResponse } from "src/dto/services/post-knights.dto";
import { PostKnightRequestDTO } from 'src/dto/controllers/KnightRequest.dto';

@Injectable()
export class PostKnights{
    constructor(
        private readonly mongodb: MongoQueries
    ){}

    async createKnights(body: PostKnightRequestDTO): Promise<CreateKnightResponse>{

        const response = {
            save: false,
            data: [],
            error: null
        } as CreateKnightResponse;

        try {

            if(body){
                let create = await this.mongodb.create(body);
                if(create){
                    response.data.push(create);
                    response.save = true;
                }
            }

        } catch (error) {
            response.error = error;
        }

        return response as CreateKnightResponse;
    }

    async updateKnights(idKnight: string, body: PostKnightRequestDTO): Promise<CreateKnightResponse>{
        
        const response = {
            save: false,
            data: [],
            error: null
        } as CreateKnightResponse;

        try {
            
            if(idKnight && body){
                let filter = {id: { $eq: idKnight}};

                let update = await this.mongodb.update(filter, body);
                if(update){
                    response.data.push(update);
                    response.save = true;
                }
            }
            
        } catch (error) {
            response.error = error
        }

        return response as CreateKnightResponse;
    }
}