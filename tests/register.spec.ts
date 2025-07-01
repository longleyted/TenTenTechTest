import { expect } from 'playwright/test';
import {test} from "../pages/fixtures/base";

const formattedEmail: string = 'someEmail@someDomain.someSuffix'

test("Unable to register without entering details", async ({registerPage}) => {
    await registerPage.visit();
    await registerPage.registerButton.click();
    await expect(registerPage.errorMessages.requiredEmailWarning).toBeVisible();
    await expect(registerPage.errorMessages.requiredPasswordWarning).toBeVisible();
});

test('Unable to register with mismatched passwords ', async ({registerPage}) => {
    await registerPage.visit();
    await registerPage.emailTextBox.fill(formattedEmail)
    await registerPage.passwordTextBox.fill('SomePassword123!')
    await registerPage.confirmPasswordTextBox.fill('321drowssaPemoS')
    await registerPage.registerButton.click();
    await expect(registerPage.errorMessages.mismatchedPasswordsWarning).toBeVisible();
});

test('unable to register without fulfilling password requirements ', async ({registerPage}) => {
    const invalidPassword = '123123'

    await registerPage.visit();
    await registerPage.emailTextBox.fill(formattedEmail)
    await registerPage.passwordTextBox.fill(invalidPassword)
    await registerPage.confirmPasswordTextBox.fill(invalidPassword)
    await registerPage.registerButton.click();
    await expect(registerPage.errorMessages.nonAlphaNumericCharacterWarning).toBeVisible();
    await expect(registerPage.errorMessages.lowerCaseWarning).toBeVisible();
    await expect(registerPage.errorMessages.upperCaseWarning).toBeVisible();
})


