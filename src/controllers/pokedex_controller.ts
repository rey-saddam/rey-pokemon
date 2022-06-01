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

    public async updatePokedex(data: RequestData): Promise<any> {
        const pokedexId = data.params.id;
        const pokedexData = data.body;

        return await this.pokedexService.updatePokedex(pokedexId, pokedexData);
    }

    public async deletePokedex(data: RequestData): Promise<any> {
        return await this.pokedexService.deletePokedex(data.params.id);
    }

    public setRoutes(): void {
        this.addRoute('get', '/', this.getAllPokedex.bind(this));
        this.addRoute('get', '/:id', this.getPokedexById.bind(this));
        this.addRoute('post', '/', this.createPokedex.bind(this), {
            validate: SCHEME.CREATE_POKEDEX
        });
        this.addRoute('put', '/:id', this.updatePokedex.bind(this), {
            validate: SCHEME.UPDATE_POKEDEX
        });
        this.addRoute('delete', '/:id', this.deletePokedex.bind(this));
    }
}

export default PokedexController;
