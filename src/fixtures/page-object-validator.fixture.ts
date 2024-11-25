import { test as base} from '@playwright/test';
import { LoginPageValidator } from '../page-object-models/page-object-validator/login.expect.validator';
import { HeaderPageValidator } from '../page-object-models/page-object-validator/header.expect.validator';
import { CartPageValidator } from '../page-object-models/page-object-validator/cart.expect.validator';
import { MenuPageValidator } from '../page-object-models/page-object-validator/menu.expect.validator';
import { CheckoutPageValidator } from '../page-object-models/page-object-validator/checkout.expect.validator';
import { CheckoutOverviewPageValidator } from '../page-object-models/page-object-validator/checkout-overview.expect.validator';
import { CheckoutCompletedPageValidator } from '../page-object-models/page-object-validator/checkout-completed.expect.validator';

export type pageObjectsValidator = {
    loginPageValidator: LoginPageValidator,
    headerPageValidator: HeaderPageValidator,
    cartPageValidator: CartPageValidator
    menuPageValidator: MenuPageValidator
    checkoutPageValidator: CheckoutPageValidator
    checkoutOverviewPageValidator: CheckoutOverviewPageValidator
    checkoutCompletedPageValidator: CheckoutCompletedPageValidator

}

export const test = base.extend<pageObjectsValidator>({
    loginPageValidator: async ({ page }, use) => {
        use(new LoginPageValidator(page));
    },
    headerPageValidator: async ({ page }, use) => {
        use(new HeaderPageValidator(page));
    },
    cartPageValidator: async ({ page }, use) => {
        use(new CartPageValidator(page));
    },
    menuPageValidator: async ({ page }, use) => {
        use(new MenuPageValidator(page));
    },
    checkoutPageValidator: async ({ page }, use) => {
        use(new CheckoutPageValidator(page));
    },
    checkoutOverviewPageValidator: async ({ page }, use) => {
        use(new CheckoutOverviewPageValidator(page));
    },
    checkoutCompletedPageValidator: async ({ page }, use) => {
        use(new CheckoutCompletedPageValidator(page));
    },

})

export { base }