import { expect } from 'playwright/test';
import {test} from "../pages/fixtures/base";

test.beforeEach(async ({welcomePage}) => {
    await welcomePage.visit();
})

test.describe('Welcome page redirect tests: ', () => {
    test('Login button redirects to login page', async ({welcomePage, page}) => {
        await welcomePage.loginButton.click()
        await expect(page).toHaveURL('/Account/Login')
    });

    test('Register button redirects to Register page', async ({welcomePage, page}) => {
        await welcomePage.registerButton.click()
        await expect(page).toHaveURL('/Identity/Account/Register')
    });
});

test("Logo image alt text is on the page", async ({welcomePage}) => {
    await expect(welcomePage.logoAltText).toBeVisible()
});
