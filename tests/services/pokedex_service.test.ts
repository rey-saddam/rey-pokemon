import test from 'ava';
import * as sinon from 'sinon';

test.beforeEach('Initialize New Sandbox Before Each Test', (t: any): void => {
    t.context.sandbox = sinon.createSandbox();
});

test.afterEach.always(
    'Restore Sandbox and Configuration After Each Test',
    (t: any): void => {
        t.context.sandbox.restore();
    }
);
