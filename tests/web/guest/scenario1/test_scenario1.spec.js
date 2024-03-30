const {test} = require('@playwright/test');
const testSteps = require('../../../testUtils/testSteps');
import { productTestData } from '../../../testUtils/testData';

test('Check Adding Product to the Cart', async ({ page }) => {

    test.setTimeout(60000);
    await page.setViewportSize({ width: 1920, height: 1080 });

    await testSteps.openHomePage(page);
    await testSteps.navigateToClothing(page, productTestData.gender);
    await testSteps.selectCategory(page, productTestData.category);
    await testSteps.selectProduct(page, productTestData.productName);
    await testSteps.selectProductSize(page, productTestData.productSize);
    await testSteps.selectProductColor(page, productTestData.productColor);
    await testSteps.addProductToCart(page);
    await testSteps.openCart(page);

    await testSteps.checkCartItemCount(page, '1');
    await testSteps.checkProductInCart(page, productTestData.productName);
    await testSteps.checkCartSubtotal(page, productTestData.cartSubtotal);  
});
