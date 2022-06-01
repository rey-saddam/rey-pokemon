import * as Joi from 'joi';
import { IObject } from 'rey-common';

const payload = {
    body: Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().required(),
        types: Joi.array().items(Joi.string()).required(),
        category: Joi.string().required(),
        height: Joi.number().required(),
        weight: Joi.number().required(),
        abilities: Joi.array().items(Joi.string()).required(),
        weaknesses: Joi.array().items(Joi.string()).required(),
        hp: Joi.number().required(),
        attack: Joi.number().required(),
        defense: Joi.number().required(),
        special_attack: Joi.number().required(),
        special_defense: Joi.number().required(),
        speed: Joi.number().required(),
        evolutions: Joi.array().items(Joi.string()).required()
    }).required()
};

const params = {
    params: Joi.object({
        id: Joi.string().required()
    }).required()
};

export const SCHEME: IObject<Joi.ObjectSchema> = {
    CREATE_POKEDEX: Joi.object({
        ...payload
    }),
    UPDATE_POKEDEX: Joi.object({
        ...payload,
        ...params
    }),
    DELETE_POKEDEX: Joi.object({
        ...params
    })
};
