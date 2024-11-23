import { test as base } from '@playwright/test';

type automaticFixtures = {
    timeLogger: () => void,
    exceptionLogger: () => void
}


export const test = base.extend<automaticFixtures>({
    timeLogger: [
        async ({ }, use) => {
            test.info().annotations.push({
                type: 'start',
                description: new Date().toISOString()
            });

            await use(() => { });

            test.info().annotations.push({
                type: 'end',
                description: new Date().toISOString()
            });
        },
        { auto: true },
    ],

    exceptionLogger: [
        async ({ page }, use) => {
            const errors: Error[] = [];
            page.on('pageerror', (error) => errors.push(error));

            await use(() => { })

            if (errors.length > 0) {
                await test.info().attach("frontend-exceptions", {
                    body: errors
                        .map((e) => ` ${e.message} \n ${e.stack}`)
                        .join('\n----------------\n'),
                }
                )
                throw new Error(errors[0].message);
            }
        }, { auto: true },
    ],
})