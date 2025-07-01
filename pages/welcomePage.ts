import { Locator, Page } from "playwright/test";

export default class WelcomePage{

    page: Page;
    logoAltText: Locator;
    loginButton: Locator;
    registerButton: Locator;
    loginLink: Locator;
    registerLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.logoAltText = this.page.getByAltText('Logo');
        this.loginButton = this.page.getByRole('button', {name: 'Login'});
        this.registerButton = this.page.getByRole('button', {name: 'Register'});
    }

    async visit(){
        await this.page.goto('');
    };
}