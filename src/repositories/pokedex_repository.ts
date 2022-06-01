import { SQLRepository } from 'rey-common';
import { PokedexProperties } from '../entity/models/pokedex';

export type PokedexRepository = SQLRepository<PokedexProperties>;

export default PokedexRepository;
