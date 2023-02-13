import { Document, Schema, model } from 'mongoose';

export interface Weapons extends Document {
    name: string;
    mod: number;
    attr: string;
    equipped: Boolean;
}

const WeaponsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    mod: {
        type:  Number,
        required: true,
    },
    attr: {
        type:  String,
        required: true,
    },
    equipped: {
        type:  Boolean,
        required: true,
        default: false
    },
})

export interface Attributes extends Document {
    strength: number; 
    dexterity: number; 
    constitution: number; 
    intelligence: number; 
    wisdom: number; 
    charisma: number; 
}

const AttributesSchema = new Schema({
    strength: {
        type:  Number,
        required: true,
    },
    dexterity: {
        type:  Number,
        required: true,
    },
    constitution: {
        type:  Number,
        required: true,
    },
    intelligence: {
        type:  Number,
        required: true,
    },
    wisdom: {
        type:  Number,
        required: true,
    },
    charisma: {
        type:  Number,
        required: true,
    },
})


export interface Knights extends Document {
    name: string;
    nickname: string;
    birthday: Date;
    weapons: Weapons[];
    attributes: Attributes;
    keyAttribute: string;
}

export const KnightsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
    },
    birthday: {
        type: Date,
        required: true,
    },
    weapons: [WeaponsSchema],
    attributes: [AttributesSchema],
    keyAttribute: {
        type: String,
        required: true,
    }
});

export const KnightsModel = model<Knights>('Knights', KnightsSchema);