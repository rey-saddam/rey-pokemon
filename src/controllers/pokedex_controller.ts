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

    public async getPokedexById(data: RequestData): Promise<any> {
        return await this.pokedexService.getPokedexById(data.params.id);
    }

    public async createPokedex(data: RequestData): Promise<any> {
        return await this.pokedexService.createPokedex(data.body);
    }

    public setRoutes(): void {
        this.addRoute('get', '/', this.getAllPokedex.bind(this));
        this.addRoute('get', '/:id', this.getPokedexById.bind(this));
        this.addRoute('post', '/', this.createPokedex.bind(this), {
            validate: SCHEME.CREATE_POKEDEX
        });
    }
}

export default PokedexController;
