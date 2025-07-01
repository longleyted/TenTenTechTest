import { Locator, Page } from "playwright/test";

export default class LoginPage{

    page: Page;
    registerButton: Locator;

    emailTextBox: Locator;
    passwordTextBox: Locator;
    confirmPasswordTextBox: Locator;
    errorMessages: ErrorMessages;


    constructor(page: Page){
        this.page = page;
        this.errorMessages = new ErrorMessages(page)
        this.registerButton = this.page.getByRole('button', {name: 'Register'});
        this.emailTextBox = this.page.getByRole('textbox', {name: 'Email'});
        this.passwordTextBox = this.page.getByRole('textbox', {name: 'Password', exact: true});
        this.confirmPasswordTextBox = this.page.getByRole('textbox', {name: 'Confirm Password'});
    };

    async visit(){
        await this.page.goto('Identity/Account/Register');
    };
}

export class ErrorMessages {

    page: Page;
    requiredPasswordWarning: Locator;
    mismatchedPasswordsWarning: Locator;
    nonAlphaNumericCharacterWarning: Locator;
    lowerCaseWarning: Locator;
    upperCaseWarning: Locator;
    requiredEmailWarning: Locator;
    missedPasswordRequirementsWarning: Locator;

     constructor(page: Page){
        this.page = page;
        this.requiredEmailWarning = this.page.getByText('The Email field is required.');
        this.missedPasswordRequirementsWarning = this.page.getByText('The Password must be at least 6 and at max 100 characters long.');
        this.requiredPasswordWarning = this.page.getByText('The Password field is required.');
        this.mismatchedPasswordsWarning = this.page.getByText('The password and confirmation password do not match.');
        this.nonAlphaNumericCharacterWarning = this.page.getByText('Passwords must have at least one non alphanumeric character.');
        this.lowerCaseWarning = this.page.getByText(`Passwords must have at least one lowercase ('a'-'z').`)
        this.upperCaseWarning = this.page.getByText(`Passwords must have at least one uppercase ('A'-'Z').`)
     }
}