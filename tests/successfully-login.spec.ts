import { test } from '../src/fixtures/merge-fixtures/index.fixtures';
import * as objectsParams from '../src/data/objects-params/texts-objects-params.data'

test('successfully login', async ({ navigateTo, loginPage, loginPageValidator, headerPageValidator }) => {

    await test.step('Validate initial status login form', async () => {

        await loginPageValidator.initialStatusLoginForm(objectsParams.LoginFormStatusValues);

    });

    await test.step('Fill login form with valid credentials', async () => {

        await loginPage.login(objectsParams.validCredentials);

    });

    await test.step('Expect to Navigate to home page', async () => {

        await headerPageValidator.primaryHeader(objectsParams.validHeaderMainText);

    });

});