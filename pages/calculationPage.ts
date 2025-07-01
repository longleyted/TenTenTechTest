import { Locator, Page } from "playwright/test";

export default class CalculationPage{

    page: Page;
    principleAmount: Locator;
    dailySelector: Locator;
    monthlySelector: Locator;
    yearlySelector: Locator;
    selectInterestRateDropdown: Locator;
    calculateButton: Locator;
    consentCheckbox: Locator;

    constructor(page: Page){
        this.page = page;
        this.principleAmount = this.page.getByLabel('Principal Amount:');
        this.dailySelector = this.page.getByRole('link', {name: 'daily'});
        this.monthlySelector = this.page.getByRole('link', {name: 'monthly'});
        this.yearlySelector = this.page.getByRole('link', {name: 'yearly'});
        this.selectInterestRateDropdown = this.page.getByRole('button', {name: 'Select Interest Rate'});
        this.calculateButton = this.page.getByRole('button', {name: 'Calculate'});
        this.consentCheckbox = this.page.getByRole('checkbox', {name: "Please accept this mandatory consent*"})
    };

    async visit(){
        await this.page.goto('/account/login');
    };

    /**
    * chooses the principle value:
    * @param amount must be between 0 and 15000
    */
    async chooseAmount(amount: number){
        await this.principleAmount.fill(amount.toString());
    };


    /**
    * chooses the interest rate based on:
    * @param interest cannot be above 15 or below 1
    */
    async chooseInterest(interest: number){
        await this.selectInterestRateDropdown.click();
        const label = this.page.getByLabel(`${interest}%`, {exact: true})
        const interestRateListItem = this.page.locator(".dropdown-item").filter({has: label});

        if(await interestRateListItem.isVisible() === false){
            this.page.on('dialog', dialog => dialog.dismiss());
            await this.selectInterestRateDropdown.click();        
        }
        const interestRateCheckbox = interestRateListItem.getByRole('checkbox');
        await interestRateCheckbox.click();
        await interestRateListItem.click();
    }

    /* 
    I could have implemented this in the same way as the above but since the options are already on
    the page (i.e. it just requires one click), I decided to just return a locator and .click it     
    
        async chooseDuration(duration: number){
            await this.page.getByRole('link', {name: duration}).click();
        }
    */
    durationLocator = (duration: string): Locator => this.page.getByRole('link', {name: duration});

}