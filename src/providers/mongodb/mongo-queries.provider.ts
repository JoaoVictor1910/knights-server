import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { Knights } from "src/models/knights/knights.schema";

Injectable()
export class MongoQueries {
    constructor(
        @InjectModel('Knights')
        private readonly mongodb: Model<Knights>
    ){}

    async find( filter: {} ): Promise<any[]> {
        try {
            
           return await this.mongodb.find(filter).exec();

        } catch (error) {
            
            throw error;

        }
    }

    async findOne( filter: {} ): Promise<any> {
        try {
            
            return await this.mongodb.findOne(filter).exec();
            
        } catch (error) {
            
            throw error;
        
        }
    }

    async create( body: {} ): Promise<any> {
        try {
            
            const dataToSave = new this.mongodb(body)
            return await dataToSave.save();

        } catch (error) {
            
            throw error;

        }
    }

    async update( filter: {}, body: {} ): Promise<any>{
        try {
            
            return await this.mongodb.updateOne(filter, body).exec();

        } catch (error) {
            
            throw error;

        }
    }

}