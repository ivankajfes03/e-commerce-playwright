const {test} = require('@playwright/test');
const testSteps = require('../../../testUtils/testSteps');
const { userCredentials, productTestData } = require('../../../testUtils/testData');

test('Check Checkout Completion', async ({ page }) => {

    test.setTimeout(60000);
    await page.setViewportSize({ width: 1920, height: 1080 });

    await testSteps.openHomePage(page);
    await testSteps.login(page, userCredentials.email, userCredentials.password);
    await testSteps.navigateToClothing(page, productTestData.gender);
    await testSteps.selectCategory(page, productTestData.category);
    await testSteps.selectProduct(page, productTestData.productName);
    await testSteps.selectProductSize(page, productTestData.productSize);
    await testSteps.selectProductColor(page, productTestData.productColor);
    await testSteps.addProductToCart(page);
    await page.getByText('You added Olivia 1/4 Zip').click();
    await testSteps.openCheckoutPage(page);
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Place Order' }).click();

    await page.getByText('Thank you for your purchase!');
    await page.isVisible('text="Your order number is:"');
});