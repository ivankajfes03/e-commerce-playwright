const {expect} = require('@playwright/test')

const testSteps = {

    openHomePage: async (page) => {
        await page.goto('https://magento.softwaretestingboard.com/');
    },

    openCheckoutPage: async (page) => {
        await page.goto('https://magento.softwaretestingboard.com/checkout/#shipping');
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

    performCheckout: async (page, testData) => {
        await page.getByRole('textbox', { name: 'Email Address *' }).click();
        await page.getByRole('textbox', { name: 'Email Address *' }).fill(testData.email);
        await page.getByLabel('First Name').click();
        await page.getByLabel('First Name').fill(testData.firstName);
        await page.getByLabel('First Name').press('Tab');
        await page.getByLabel('Last Name').fill(testData.lastName);
        await page.getByLabel('Street Address: Line 1').click();
        await page.getByLabel('Street Address: Line 1').fill(testData.streetAddress);
        await page.getByLabel('City').click();
        await page.getByLabel('City').fill(testData.city);
        await page.getByLabel('Country').selectOption(testData.country);
        await page.getByLabel('Zip/Postal Code').click();
        await page.getByLabel('Zip/Postal Code').fill(testData.postalCode);
        await page.locator('select[name="region_id"]').selectOption(testData.regionId);
        await page.getByLabel('Phone Number').click();
        await page.getByLabel('Phone Number').fill(testData.phoneNumber);
        await page.getByLabel('Fixed').check();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Place Order' }).click();
        await page.getByText('Thank you for your purchase!');
        await page.isVisible('text="Your order number is:"');
    },
};

module.exports = testSteps