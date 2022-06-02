import { Service } from 'rey-common';
import { NotFoundError } from 'rey-common/modules/utils/http_error';
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
            throw new NotFoundError('Pokedex not found', 'POKEDEX_NOT_FOUND');
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
            throw new NotFoundError('Pokedex not found', 'POKEDEX_NOT_FOUND');
        }

        await this.PokedexRepository.update({ id }, payload);

        return pokedex;
    }

    public async deletePokedex(id: string): Promise<any> {
        const pokedex = await this.PokedexRepository.findOne({ id });

        if (!pokedex) {
            throw new NotFoundError('Pokedex not found', 'POKEDEX_NOT_FOUND');
        }

        await this.PokedexRepository.delete({ id });

        return { id };
    }
}

export default PokedexServiceImpl;
