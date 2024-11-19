import { test } from '../src/fixtures/merge-fixtures/index.fixtures';
import { loginTexts } from '../src/data/login-texts.data';
import { configDotenv } from 'dotenv';
import { headerTexts } from '../src/data/header-texts.data';
configDotenv()

const { STANDARD_USER, PASSWORD } = process.env

test('successfully login', async ({ navigateTo, loginPage, loginTextsValidator, headerTextsValidator }) => {

    await test.step('Validate initial status login form', async () => {

        await loginTextsValidator
            .initialStatusLoginForm(loginTexts().USERNAME_PLACEHOLDER, loginTexts().PASSWORD_PLACEHOLDER);

    });

    await test.step('Fill login form with valid credentials', async () => {

        await loginPage.login(STANDARD_USER ?? '', PASSWORD ?? '');

    });

    await test.step('Expect to Navigate to home page', async () => {

        await headerTextsValidator
            .primaryHeader(headerTexts().APP_LOGO, headerTexts().SECTION_TITLE);

    });

});