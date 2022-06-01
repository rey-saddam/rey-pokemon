import { Controller as BaseController, RequestData } from 'rey-common';
import { API_ROUTE } from '../entity/constant/api';
import { SCHEME } from '../entity/validation/pokedex';
import PokedexService from '../services/pokedex_service';

export class PokedexController extends BaseController {
    public constructor(private pokedexService: PokedexService) {
        super({ path: API_ROUTE.POKEDEX });
    }

    public setRoutes(): void {}
}

export default PokedexController;
