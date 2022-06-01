import { SQLRepository } from 'rey-common';
import { PokedexProperties } from '../../entity/models/pokedex';
import PokedexRepository from '../pokedex_repository';

export class PokedexRepositoryImpl
    extends SQLRepository<PokedexProperties>
    implements PokedexRepository
{
    public constructor() {
        super('Pokedex');
    }
}

export default PokedexRepositoryImpl;
