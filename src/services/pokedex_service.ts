import { Service } from 'rey-common';
import { PokedexProperties } from '../entity/models/pokedex';

export interface PokedexService extends Service {
    getAllPokedex(): Promise<PokedexProperties[]>;
    getPokedexById(id: string): Promise<PokedexProperties>;
    createPokedex(payload: PokedexProperties): Promise<PokedexProperties>;
    updatePokedex(
        id: string,
        payload: PokedexProperties
    ): Promise<PokedexProperties>;
    deletePokedex(id: string): Promise<void>;
}

export default PokedexService;
