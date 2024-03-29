const {test, expect} = require('@playwright/test');
const testSteps = require('../../../testUtils/testSteps');

test('Check Adding Product to the Cart', async ({ page }) => {

  const email = 'test-ik@gmail.com';
  const password = 'Password1';
  const gender = 'Women';
  const category = 'Jackets';
  const productName = 'Olivia 1/4 Zip Light Jacket';
  const productSize = 'M';
  const productColor = 'Black';
  const cartSubtotal = '$77.00';

  await page.setViewportSize({ width: 1600, height: 1200 });

  await testSteps.openHomePage(page);
  await testSteps.login(page, email, password);
//   await testSteps.emptyCart(page)
  await testSteps.navigateToClothing(page, gender);
  await testSteps.selectCategory(page, category);
  await testSteps.selectProduct(page, productName);
  await testSteps.selectProductSize(page, productSize);
  await testSteps.selectProductColor(page, productColor);
  await testSteps.addProductToCart(page);
  await testSteps.openCart(page);

  await testSteps.checkCartItemCount(page, '1');
  await testSteps.checkProductInCart(page, productName);
  await testSteps.checkCartSubtotal(page, cartSubtotal);  
});