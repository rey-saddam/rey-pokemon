import { App as BaseApp, SQLContext, RedisContext } from 'rey-common';
import PokedexRepositoryImpl from './repositories/impl/pokedex_repository_impl';
import PokedexServiceImpl from './services/impl/pokedex_service_impl';
import PokedexController from './controllers/pokedex_controller';

class App extends BaseApp {
    public async initProviders(): Promise<void> {
        SQLContext.initialize({
            connection_string: String(process.env.DB_CONNECTION_STRING),
            models_path: './database/models'
        });
        RedisContext.initialize({
            connection_string: String(process.env.REDIS_CONNECTION_STRING)
        });
    }

    public async initControllers(): Promise<void> {
        const pokedexRepo = new PokedexRepositoryImpl();
        const pokedexService = new PokedexServiceImpl(pokedexRepo);

        this.addController(new PokedexController(pokedexService));
    }
}

export default App;
