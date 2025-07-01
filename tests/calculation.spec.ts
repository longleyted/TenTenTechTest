import { expect } from 'playwright/test';
import {test} from "../pages/fixtures/base";
import { calculateResult } from '../utils/calculate';
import { values } from '../utils/types/values';

test("Interest is calculated correctly with daily selected: ", async ({loginPage, calculationPage, page}) => {
    let valuesOfInterest: values = {
        amount: 10000,
        interest: 10,
        duration: "daily"
    };
    await calculateResult(valuesOfInterest);

    await loginPage.login();
    await calculationPage.chooseAmount(valuesOfInterest.amount);
    await calculationPage.chooseInterest(valuesOfInterest.interest);
    await calculationPage.durationLocator(valuesOfInterest.duration).click();
    await calculationPage.consentCheckbox.click();
    await calculationPage.calculateButton.click();
    await expect(page.getByText(`Interest Amount: ${valuesOfInterest.expectedIncrease}`)).toBeVisible();
    await expect(page.getByText(`Total Amount with Interest: ${valuesOfInterest.expectedFinalValue}`)).toBeVisible();
})

test("Interest is calculated correctly with monthly selected: ", async ({loginPage, calculationPage, page}) => {
    let valuesOfInterest: values = {
        amount: 12300,
        interest: 2,
        duration: "monthly"
    };
    await calculateResult(valuesOfInterest);

    await loginPage.login();
    await expect(calculationPage.selectInterestRateDropdown).toBeVisible();
    await calculationPage.chooseAmount(valuesOfInterest.amount);
    await calculationPage.chooseInterest(valuesOfInterest.interest);
    await calculationPage.durationLocator(valuesOfInterest.duration).click();
    await calculationPage.consentCheckbox.click();
    await calculationPage.calculateButton.click();
    await expect(page.getByText(`Interest Amount: ${valuesOfInterest.expectedIncrease}`)).toBeVisible();
    await expect(page.getByText(`Total Amount with Interest: ${valuesOfInterest.expectedFinalValue}`)).toBeVisible();
})

test("Interest is calculated correctly with yearly selected: ", async ({loginPage, calculationPage, page}) => {
    let valuesOfInterest: values = {
        amount: 15000,
        interest: 15,
        duration: "yearly"
    };
    await calculateResult(valuesOfInterest);

    await loginPage.login();
    await expect(calculationPage.selectInterestRateDropdown).toBeVisible();
    await calculationPage.chooseAmount(valuesOfInterest.amount);
    await calculationPage.chooseInterest(valuesOfInterest.interest);
    await calculationPage.durationLocator(valuesOfInterest.duration).click();
    await calculationPage.consentCheckbox.click();
    await calculationPage.calculateButton.click();
    await expect(page.getByText(`Interest Amount: ${valuesOfInterest.expectedIncrease}`)).toBeVisible();
    await expect(page.getByText(`Total Amount with Interest: ${valuesOfInterest.expectedFinalValue}`)).toBeVisible();
})