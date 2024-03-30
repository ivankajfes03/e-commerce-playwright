const {test} = require('@playwright/test');
const testSteps = require('../../../testUtils/testSteps');

test('Check Checkout Completion', async ({ page }) => {

    const testData = {
        email: 'test-ik@gmail.com',
        password: 'Password1',
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

    await page.setViewportSize({ width: 1920, height: 1080 });

    await testSteps.openHomePage(page);
    await testSteps.login(page, testData.email, testData.password)
    await testSteps.navigateToClothing(page, gender);
    await testSteps.selectCategory(page, category);
    await testSteps.selectProduct(page, productName);
    await testSteps.selectProductSize(page, productSize);
    await testSteps.selectProductColor(page, productColor);
    await testSteps.addProductToCart(page);
    await page.getByText('You added Olivia 1/4 Zip').click();
    await testSteps.openCheckoutPage(page)
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Place Order' }).click();
    await page.getByText('Thank you for your purchase!');
    await page.isVisible('text="Your order number is:"');
  });