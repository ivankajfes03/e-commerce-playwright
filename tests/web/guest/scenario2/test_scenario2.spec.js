const {test} = require('@playwright/test');
const testSteps = require('../../../testUtils/testSteps');
const { guestTestData, productTestData } = require('../../../testUtils/testData');

test('Check Checkout Completion', async ({ page }) => {

    test.setTimeout(60000);
    await page.setViewportSize({ width: 1920, height: 1080 });

    await testSteps.openHomePage(page);
    await testSteps.navigateToClothing(page, productTestData.gender);
    await testSteps.selectCategory(page, productTestData.category);
    await testSteps.selectProduct(page, productTestData.productName);
    await testSteps.selectProductSize(page, productTestData.productSize);
    await testSteps.selectProductColor(page, productTestData.productColor);
    await testSteps.addProductToCart(page);
    await page.getByText('You added Olivia 1/4 Zip').click();
    await testSteps.openCart(page);
    await testSteps.openCheckoutPage(page)
    await testSteps.performCheckout(page, guestTestData);
  });