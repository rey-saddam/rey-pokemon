import { BaseProps } from 'rey-common';

export interface PokedexProperties extends BaseProps {
    name: string;
    description: string;
    image: string;
    types: string[];
    category: string;
    height: number;
    weight: number;
    abilities: string[];
    weeaknesses: string[];
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
    evolutions: string[];
}
