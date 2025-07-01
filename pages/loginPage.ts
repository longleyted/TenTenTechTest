import { Locator, Page } from "playwright/test";
import config from '../config.json'

export default class LoginPage{

    page: Page;
    emailTextBox: Locator
    passwordTextBox: Locator
    loginButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.emailTextBox = this.page.getByRole('textbox', {name: 'Email'});
        this.passwordTextBox = this.page.getByRole('textbox', {name: 'Password', exact: true});
        this.loginButton = this.page.getByRole('button', {name: 'Log in'});
    }

    async visit(){
        await this.page.goto('/account/login');
    }

    async login(){
        await this.visit();
        await this.emailTextBox.fill(config.email);
        await this.passwordTextBox.fill(config.password);
        await this.loginButton.click();
    }
}