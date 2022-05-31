import { Context, Controller as BaseController, JWTMiddleware, RequestData } from 'rey-common';
import { API_ROUTE } from '../entity/constant/api';
import StarwarsOutboundService from '../outbound/starwars_outbound_service';
import UserService from '../services/user_service';

export class ProfileController extends BaseController {
    public constructor(
        private userService: UserService,
        private starWarsOutboundService: StarwarsOutboundService
    ) {
        super({ path: API_ROUTE.PROFILE });
    }

    public async getProfile(data: RequestData, context: Context): Promise<any> {
        const user = await this.userService.getUser(context.user_id);
        return user;
    }

    public async getStarwarsProfile(data: RequestData, context: Context): Promise<any> {
        const person = await this.starWarsOutboundService.getPersonById(data.params.id);
        return person;
    }

    public setRoutes(): void {
        /** router level caching */
        this.addRoute('get', '/', this.getProfile.bind(this));
        this.addRoute('get', '/starwars/:id', this.getStarwarsProfile.bind(this));
    }
}

export default ProfileController;
