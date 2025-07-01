import LoginPage from "../loginPage"
import {test as base} from 'playwright/test'
import WelcomePage from "../welcomePage"
import RegisterPage from '../registerPage'
import CalculationPage from "../calculationPage"

type commonFixtures = {
    loginPage: LoginPage
    welcomePage: WelcomePage
    registerPage: RegisterPage;
    calculationPage: CalculationPage
}

export const test = base.extend<commonFixtures>({

    loginPage: async({page},use)=>{
        const loginPage = new LoginPage(page)
        await use(loginPage)
    },

   welcomePage: async({page},use)=>{
        const welcomePage = new WelcomePage(page)
        await use(welcomePage)
    },

   registerPage: async({page},use)=>{
        const registerPage = new RegisterPage(page)
        await use(registerPage)
    },

   calculationPage: async({page},use)=>{
        const calculationPage = new CalculationPage(page)
        await use(calculationPage)
    },







})