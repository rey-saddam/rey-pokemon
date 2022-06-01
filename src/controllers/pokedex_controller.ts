import { Controller as BaseController, RequestData } from 'rey-common';
import { API_ROUTE } from '../entity/constant/api';
import { SCHEME } from '../entity/validation/pokedex';
import PokedexService from '../services/pokedex_service';

export class PokedexController extends BaseController {
    public constructor(private pokedexService: PokedexService) {
        super({ path: API_ROUTE.POKEDEX });
    }

    public async getAllPokedex(): Promise<any> {
        return await this.pokedexService.getAllPokedex();
    }

    public setRoutes(): void {
        this.addRoute('get', '/', this.getAllPokedex.bind(this));
    }
}

export default PokedexController;
