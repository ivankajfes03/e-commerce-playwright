const {test} = require('@playwright/test');
const testSteps = require('../../../testUtils/testSteps');

test('Check Checkout Completion', async ({ page }) => {

    const testData = {
        email: 'test-ik03@gmail.com',
        firstName: 'Test Name',
        lastName: 'Test Last Name',
        streetAddress: 'Test Street Address',
        city: 'Test City',
        postalCode: '51215',
        country: 'HR',
        phoneNumber: '+3859999999999',
        regionId: '519'
    };

    const gender = 'Women';
    const category = 'Jackets';
    const productName = 'Olivia 1/4 Zip Light Jacket';
    const productSize = 'M';
    const productColor = 'Black';

    await page.setViewportSize({ width: 1600, height: 1200 });

    await testSteps.openHomePage(page);
    await testSteps.navigateToClothing(page, gender);
    await testSteps.selectCategory(page, category);
    await testSteps.selectProduct(page, productName);
    await testSteps.selectProductSize(page, productSize);
    await testSteps.selectProductColor(page, productColor);
    await testSteps.addProductToCart(page);
    await page.getByText('You added Olivia 1/4 Zip').click();
    await testSteps.openCart(page);
    await testSteps.openCheckoutPage(page)
    await testSteps.performCheckout(page, testData);
  });