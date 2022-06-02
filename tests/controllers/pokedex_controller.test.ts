import PokedexServiceImpl from '../../src/services/impl/pokedex_service_impl';
import { default as axios } from 'axios';
import { POKEDEX } from '../variables/pokedex_variable';
import test from 'ava';
import * as http from 'http';
import * as sinon from 'sinon';
import * as listen from 'test-listen';

import App from '../../src/app';

test.beforeEach('Initialize New Sandbox Before Each Test', async (t: any) => {
    t.context.sandbox = sinon.createSandbox();
    t.context.sandbox.stub(App.prototype, 'initProviders').resolves();

    const app = new App({ port: 0 });
    await app.initialize();

    t.context.server = http.createServer(app.getInstance());
    t.context.prefixUrl = await listen(t.context.server);
});

test.afterEach.always(
    'Restore Sandbox and Configuration After Each Test',
    (t: any) => {
        t.context.sandbox.restore();
        t.context.server.close();
    }
);
