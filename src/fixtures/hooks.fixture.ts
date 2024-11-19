import { base, pageObjects } from '../fixtures/page-object.fixture';

type Hooks = {
    navigateTo: () => void,
}

export const test = base.extend<pageObjects & Hooks>({
    navigateTo: async ({ page, loginPage }, use) => {
        await loginPage.goToPage('/')
        await use(() => {loginPage});
        await page.close({ reason: 'done' });
    }
})