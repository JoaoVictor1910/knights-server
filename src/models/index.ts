import { Connection } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectConnection, MongooseModule } from '@nestjs/mongoose';
import envConfig from 'src/configs/env-config';
import { KnightsSchema } from './knights/knights.schema';

const mongooseModules = MongooseModule.forFeature([
    {
        name: 'Knights',
        schema: KnightsSchema
    }
])

export const schemaModules = [
  MongooseModule.forRoot('mongodb+srv://admin:1234@knights.euxw9pt.mongodb.net/?retryWrites=true&w=majority'),
  mongooseModules
];
