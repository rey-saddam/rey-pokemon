import { PokedexProperties } from '../../src/entity/models/pokedex';
import { NotFoundError } from 'rey-common/modules/utils/http_error';
import { POKEDEX } from '../variables/pokedex_variable';
import test from 'ava';
import * as sinon from 'sinon';
import PokedexServiceImpl from '../../src/services/impl/pokedex_service_impl';
import PokedexRepositoryImpl from '../../src/repositories/impl/pokedex_repository_impl';

const pokedexService = new PokedexServiceImpl(new PokedexRepositoryImpl());

test.beforeEach('Initialize New Sandbox Before Each Test', (t: any): void => {
    t.context.sandbox = sinon.createSandbox();
});

test.afterEach.always(
    'Restore Sandbox and Configuration After Each Test',
    (t: any): void => {
        t.context.sandbox.restore();
    }
);

test.serial('Get all pokedex - success', async (t: any): Promise<void> => {
    const expectedResult = [POKEDEX];

    const mockPokedex = t.context.sandbox
        .mock(PokedexRepositoryImpl.prototype)
        .expects('findAll')
        .resolves(expectedResult);

    await pokedexService
        .getAllPokedex()
        .then((actualResult: PokedexProperties[]): void => {
            t.true(mockPokedex.called);
            t.deepEqual(actualResult, expectedResult);
            t.is(actualResult.length, 1);
        })
        .catch((err: any): void => {
            t.fail(err.message);
        });
});
