const {expect} = require('@playwright/test')

const testSteps = {

    openHomePage: async (page) => {
        await page.goto('https://magento.softwaretestingboard.com/');
    },

    login: async (page, email, password) => {
        await page.getByRole('link', { name: 'Sign In' }).click();
        await page.getByLabel('Email', { exact: true }).click();
        await page.getByLabel('Email', { exact: true }).fill(email);
        await page.getByLabel('Email', { exact: true }).press('Tab');
        await page.getByLabel('Password').fill(password);
        await page.getByRole('button', { name: 'Sign In' }).click();
    },

    // To be fixed
    // emptyCart: async (page) => {
    //     await page.getByRole('link', { name: /My Cart \d+ / }).click();
    //     await page.getByRole('link', { name: ' Remove' }).click();
    //     await page.getByRole('button', { name: 'OK' }).click();
    // },

    navigateToClothing: async (page, gender) => {
        const menuName = ' ' + gender;
        await page.getByRole('menuitem', { name: menuName }).click();
    },

    selectCategory: async (page, category) => {
        await page.getByRole('link', { name: category }).click();
    },

    navigateToWomenClothing: async (page) => {
        await page.getByRole('menuitem', { name: ' Women' }).click();
    },

    selectJacketsCategory: async (page) => {
        await page.getByRole('link', { name: 'Jackets' }).click();
    },

    selectProduct: async (page, productName) => {
        await page.getByRole('link', { name: productName }).first().click();
    },

    selectProductSize: async (page, productSize) => {
        await page.getByLabel(productSize, { exact: true }).click();
    },      

    selectProductColor: async (page, productColor) => {
        await page.getByLabel(productColor).click();
    },

    addProductToCart: async (page) => {
        await page.getByRole('button', { name: 'Add to Cart' }).click();
    },

    openCart: async (page) => {
        await page.getByRole('link', { name: ' My Cart 1 1\nitems' }).click();
    },

    checkCartItemCount: async (page, expectedItemCount) => {
        const itemCount = await page.getByText(expectedItemCount, { exact: true }).nth(2);
        await expect(itemCount).toHaveText(expectedItemCount);
    },

    checkProductInCart: async (page, expectedProductName) => {
        const productLocator = page.locator('#minicart-content-wrapper div').filter({ hasText: expectedProductName }).nth(1);
        const productText = await productLocator.textContent();
        expect(productText).toContain(expectedProductName);
    },

    checkCartSubtotal: async (page, expectedSubtotal) => {
        const cartSubtotal = await page.locator('.amount');
        await expect(cartSubtotal).toHaveText(expectedSubtotal);
    },   
};

module.exports = testSteps