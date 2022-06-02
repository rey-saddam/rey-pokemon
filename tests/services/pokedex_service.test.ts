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

test.serial('Get pokedex by id - success', async (t: any): Promise<void> => {
    const expectedResult = POKEDEX;

    const mockPokedex = t.context.sandbox
        .mock(PokedexRepositoryImpl.prototype)
        .expects('findOne')
        .resolves(expectedResult);

    await pokedexService
        .getPokedexById(POKEDEX.id)
        .then((actualResult: PokedexProperties): void => {
            t.true(mockPokedex.called);
            t.deepEqual(actualResult, expectedResult);
        })
        .catch((err: any): void => {
            t.fail(err.message);
        });
});

test.serial('Get pokedex by id - not found', async (t: any): Promise<void> => {
    const expectedResult = null;

    const mockPokedex = t.context.sandbox
        .mock(PokedexRepositoryImpl.prototype)
        .expects('findOne')
        .resolves(expectedResult);

    await pokedexService
        .getPokedexById('not-found')
        .then((): void => {
            t.fail();
        })
        .catch((err: any): void => {
            t.true(mockPokedex.called);
            t.true(err instanceof NotFoundError);
            t.is(err.message, 'Pokedex not found');
        });
});

test.serial('Create pokedex - success', async (t: any): Promise<void> => {
    const expectedResult = POKEDEX;

    const mockPokedex = t.context.sandbox
        .mock(PokedexRepositoryImpl.prototype)
        .expects('create')
        .resolves(expectedResult);

    await pokedexService
        .createPokedex(POKEDEX)
        .then((actualResult: PokedexProperties): void => {
            t.true(mockPokedex.called);
            t.deepEqual(actualResult, expectedResult);
        })
        .catch((err: any): void => {
            t.fail(err.message);
        });
});

test.serial('Update pokedex - success', async (t: any): Promise<void> => {
    const expectedResult = POKEDEX;

    const mockPokedex = t.context.sandbox
        .mock(PokedexRepositoryImpl.prototype)
        .expects('update')
        .resolves(expectedResult);

    const mockPokedexById = t.context.sandbox
        .mock(PokedexRepositoryImpl.prototype)
        .expects('findOne')
        .resolves(expectedResult);

    await pokedexService
        .updatePokedex(POKEDEX.id, { ...POKEDEX, name: 'new name' })
        .then((actualResult: PokedexProperties): void => {
            t.true(mockPokedex.called);
            t.true(mockPokedexById.called);
            t.deepEqual(actualResult, expectedResult);
        })
        .catch((err: any): void => {
            t.fail(err.message);
        });
});

test.serial('Update pokedex - not found', async (t: any): Promise<void> => {
    const expectedResult = null;

    const mockPokedex = t.context.sandbox
        .mock(PokedexRepositoryImpl.prototype)
        .expects('update')
        .resolves(expectedResult);

    const mockPokedexById = t.context.sandbox
        .mock(PokedexRepositoryImpl.prototype)
        .expects('findOne')
        .resolves(expectedResult);

    await pokedexService
        .updatePokedex('not-found', {
            ...POKEDEX,
            name: 'new name'
        })
        .then((): void => {
            t.fail();
        })
        .catch((err: any): void => {
            t.true(mockPokedex.notCalled);
            t.true(mockPokedexById.called);
            t.true(err instanceof NotFoundError);
            t.is(err.message, 'Pokedex not found');
        });
});

test.serial('Delete pokedex - success', async (t: any): Promise<void> => {
    const expectedResult = { id: POKEDEX.id };

    const mockPokedex = t.context.sandbox
        .mock(PokedexRepositoryImpl.prototype)
        .expects('delete')
        .resolves();

    const mockPokedexById = t.context.sandbox
        .mock(PokedexRepositoryImpl.prototype)
        .expects('findOne')
        .resolves(POKEDEX);

    await pokedexService
        .deletePokedex(POKEDEX.id)
        .then((actualResult: void): void => {
            t.true(mockPokedex.called);
            t.true(mockPokedexById.called);
            t.deepEqual(actualResult, expectedResult);
        })
        .catch((err: any): void => {
            t.fail(err.message);
        });
});

test.serial('Delete pokedex - not found', async (t: any): Promise<void> => {
    const expectedResult = null;

    const mockPokedex = t.context.sandbox
        .mock(PokedexRepositoryImpl.prototype)
        .expects('delete')
        .resolves();

    const mockPokedexById = t.context.sandbox
        .mock(PokedexRepositoryImpl.prototype)
        .expects('findOne')
        .resolves(expectedResult);

    await pokedexService
        .deletePokedex('not-found')
        .then((): void => {
            t.fail();
        })
        .catch((err: any): void => {
            t.true(mockPokedex.notCalled);
            t.true(mockPokedexById.called);
            t.true(err instanceof NotFoundError);
            t.is(err.message, 'Pokedex not found');
        });
});
