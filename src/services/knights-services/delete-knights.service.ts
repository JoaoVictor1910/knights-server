import { Injectable } from "@nestjs/common";
import { MongoQueries } from "src/providers/mongodb/mongo-queries.provider";
import { DeleteKnightRespone } from "src/dto/services/delete-knights.dto";

@Injectable()
export class DeleteKnights{
    constructor(
        private readonly mongodb: MongoQueries
    ){}

    async deleteKnights(id: string): Promise<DeleteKnightRespone>{
        const response = {
            delete: false,
            data: [],
            error: null
        } as DeleteKnightRespone;

        try {
            
            if(id){
                let deleted = await this.mongodb.delete(id);
                if(deleted){
                    response.delete = true;
                    response.data.push(deleted);
                }
            }

        } catch (error) {
            response.error = error;
        }

        return response as DeleteKnightRespone;
    }
}