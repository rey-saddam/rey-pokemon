import { Service } from 'rey-common';
import { PokedexProperties } from '../../entity/models/pokedex';
import PokedexRepository from '../../repositories/pokedex_repository';
import PokedexService from '../pokedex_service';

export class PokedexServiceImpl extends Service implements PokedexService {
    public constructor(private PokedexRepository: PokedexRepository) {
        super();
    }

    public async getAllPokedex(): Promise<PokedexProperties[]> {}

    public async getPokedexById(id: string): Promise<PokedexProperties> {}

    public async createPokedex(
        payload: PokedexProperties
    ): Promise<PokedexProperties> {}

    public async updatePokedex(
        id: string,
        payload: PokedexProperties
    ): Promise<PokedexProperties> {}

    public async deletePokedex(id: string): Promise<void> {}

    public setRoutes(): void {}
}

export default PokedexServiceImpl;
