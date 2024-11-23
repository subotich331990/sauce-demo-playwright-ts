import { test as base} from '@playwright/test';
import { LoginPageValidator } from '../page-object-models/page-object-validator/login.expect.validator';
import { HeaderPageValidator } from '../page-object-models/page-object-validator/header.expect.validator';

type pageObjectsValidator = {
    loginTextsValidator: LoginPageValidator,
    headerTextsValidator: HeaderPageValidator

}

export const test = base.extend<pageObjectsValidator>({
    loginTextsValidator: async ({ page }, use) => {
        use(new LoginPageValidator(page));
    },
    headerTextsValidator: async ({ page }, use) => {
        use(new HeaderPageValidator(page));
    },

})