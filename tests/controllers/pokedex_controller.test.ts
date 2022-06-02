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

test.serial('Get all pokedex - success', async (t: any) => {
    const expectedResult = [POKEDEX];

    const mockPokedex = t.context.sandbox
        .mock(PokedexServiceImpl.prototype)
        .expects('getAllPokedex')
        .resolves(expectedResult);

    const url = `${t.context.prefixUrl}/v1/pokedex`;
    const res = await axios.get(url);

    t.true(mockPokedex.called);
    t.deepEqual(res.data, expectedResult);
    t.is(res.data.length, 1);
});

test.serial('Get pokedex by id - success', async (t: any) => {
    const expectedResult = POKEDEX;

    const mockPokedex = t.context.sandbox
        .mock(PokedexServiceImpl.prototype)
        .expects('getPokedexById')
        .resolves(expectedResult);

    const url = `${t.context.prefixUrl}/v1/pokedex/1`;
    const res = await axios.get(url);

    t.true(mockPokedex.called);
    t.deepEqual(res.data, expectedResult);
});

test.serial('Get pokedex by id - not found', async (t: any) => {
    const expectedResult = null;

    const mockPokedex = t.context.sandbox
        .mock(PokedexServiceImpl.prototype)
        .expects('getPokedexById')
        .resolves(expectedResult);

    const url = `${t.context.prefixUrl}/v1/pokedex/1`;
    const res = await axios.get(url);

    t.true(mockPokedex.called);
    t.deepEqual(res.data, expectedResult);
});
