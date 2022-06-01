import { Service } from 'rey-common';
import { PokedexProperties } from '../../entity/models/pokedex';
import PokedexRepository from '../../repositories/pokedex_repository';
import PokedexService from '../pokedex_service';

export class PokedexServiceImpl extends Service implements PokedexService {
    public constructor(private PokedexRepository: PokedexRepository) {
        super();
    }

    public async getAllPokedex(): Promise<PokedexProperties[]> {
        return this.PokedexRepository.findAll({}, {});
    }

    public async getPokedexById(id: string): Promise<PokedexProperties> {
        const pokedex = await this.PokedexRepository.findOne({ id });

        if (!pokedex) {
            throw new Error('Pokedex not found');
        }

        return pokedex;
    }

    public async createPokedex(
        payload: PokedexProperties
    ): Promise<PokedexProperties> {
        return this.PokedexRepository.create(payload);
    }

    public async updatePokedex(
        id: string,
        payload: PokedexProperties
    ): Promise<PokedexProperties> {
        const pokedex = await this.PokedexRepository.findOne({ id });

        if (!pokedex) {
            throw new Error('Pokedex not found');
        }

        await this.PokedexRepository.update({ id }, payload);

        return pokedex;
    }

    public async deletePokedex(id: string): Promise<void> {
        const pokedex = await this.PokedexRepository.findOne({ id });

        if (!pokedex) {
            throw new Error('Pokedex not found');
        }

        await this.PokedexRepository.delete({ id });
    }

    public setRoutes(): void {}
}

export default PokedexServiceImpl;
