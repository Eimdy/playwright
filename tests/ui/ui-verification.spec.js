import { test, expect } from "../../fixture/pageManagementFixture.js";

test.describe("UI Verification", () => {

  test("Verify homepage loads successfully", async ({ page }) => {
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/sauce-demo\.myshopify\.com/);
  });

  test("Verify site logo is displayed", async ({ HomePage }) => {
    await expect(HomePage.sauceDemoLogo).toBeVisible();
    await expect(HomePage.sauceDemoDescription).toBeVisible();
  });

  test("Verify sidebar menu contains all items", async ({ SideBar }) => {
    await expect(SideBar.homeMenu).toBeVisible();
    await expect(SideBar.catalogMenu).toBeVisible();
    await expect(SideBar.blogMenu).toBeVisible();
    await expect(SideBar.aboutUsMenu).toBeVisible();
    await expect(SideBar.wishListMenu).toBeVisible();
    await expect(SideBar.referAFriendMenu).toBeVisible();
  });

  test("Verify top navigation bar elements", async ({ NavigationBar }) => {
    await expect(NavigationBar.searchPageMenu).toBeVisible();
    await expect(NavigationBar.aboutUsMenu).toBeVisible();
    await expect(NavigationBar.logInMenu).toBeVisible();
    await expect(NavigationBar.signUpMenu).toBeVisible();
    await expect(NavigationBar.myCartMenu).toBeVisible();
    await expect(NavigationBar.checkOutMenu).toBeVisible();
  });

  test("Verify search field and button exist", async ({ NavigationBar }) => {
    await expect(NavigationBar.searchBox).toBeVisible();
    await expect(NavigationBar.searchButton).toBeVisible();
  });

  test("Verify social media links in sidebar", async ({ SideBar }) => {
    await expect(SideBar.facebookLink).toBeVisible();
    await expect(SideBar.twitterLink).toBeVisible();
    await expect(SideBar.instagramLink).toBeVisible();
    await expect(SideBar.pinterestLink).toBeVisible();
    await expect(SideBar.rrssLink).toBeVisible();
  });

  test("Verify products displayed in grid format", async ({ HomePage }) => {
    let allProducts = await HomePage.productGrid.count();
    for (let i = 0; i < allProducts; i++) {
      await expect(HomePage.productGridByIndex(i)).toBeVisible();
      await expect(HomePage.productNameByIndex(i)).toBeVisible();
      await expect(HomePage.productPriceByIndex(i)).toBeVisible();
    }
  });

  test("Verify footer contains required information", async ({ Footer }) => {
    await expect(Footer.footerHeader).toBeVisible();
    await expect(Footer.searchLink).toBeVisible();
    await expect(Footer.aboutUsLink).toBeVisible();
    await expect(Footer.amexImage).toBeVisible();
    await expect(Footer.visaImage).toBeVisible();
    await expect(Footer.mastercardImage).toBeVisible();
  });

  test("Verify catalog page displays all products", async ({ SideBar, CatalogPage }) => {
    await SideBar.catalogMenu.click();
    await expect(CatalogPage.productHeading).toBeVisible();
    await expect(CatalogPage.productLink).toBeVisible();
  });

  test("Verify breadcrumb navigation on catalog page", async ({ SideBar, CatalogPage }) => {
    await SideBar.catalogMenu.click();
    await expect(CatalogPage.productBreadcrumb).toBeVisible();
  });

  test("Verify all product images load correctly", async ({ SideBar, CatalogPage }) => {
    let allProducts = await CatalogPage.productGrid.count();
    await SideBar.catalogMenu.click();

    for (let i = 0; i < allProducts; i++) {
      await expect(CatalogPage.productGridByIndex(i)).toBeVisible();
      await expect(CatalogPage.productNameByIndex(i)).toBeVisible();
      await expect(CatalogPage.productPriceByIndex(i)).toBeVisible();
    }
  });

  test("Verify product titles are visible", async ({ SideBar, CatalogPage }) => {
      await SideBar.catalogMenu.click();
      await expect(CatalogPage.productNameByIndex(1)).toBeVisible();
  });

  test("Verify prices are shown in correct format", async ({ SideBar, CatalogPage }) => {
    await SideBar.catalogMenu.click();
    await expect(CatalogPage.productByName('Grey jacket')).toContainText("£");
  });

  test("Verify SOLD OUT badge on unavailable products", async ({ SideBar, CatalogPage }) => {
    await SideBar.catalogMenu.click();
    await expect(CatalogPage.productSoldOutLabelByName('White sandals')).toContainText("Sold Out");
  });

  test("Verify product detail page loads when product clicked", async ({ SideBar, CatalogPage, ProductDetailPage}) => {
    await SideBar.catalogMenu.click();
    await CatalogPage.productByName('Grey jacket').click();
    await expect(ProductDetailPage.productName).toBeVisible();
  });

  test("Verify product image on detail page", async ({ SideBar, CatalogPage }) => {
    await SideBar.catalogMenu.click();
    await CatalogPage.productByName('Grey jacket').click();
    await expect(CatalogPage.productImagebyIndex(1)).toBeVisible();
  });

  test("Verify product title on detail page", async ({ SideBar, CatalogPage, ProductDetailPage }) => {
    await SideBar.catalogMenu.click();
    await CatalogPage.productByName('Grey jacket').click();
    await expect(ProductDetailPage.productName).toBeVisible();
  });

  test("Verify price display on PDP", async ({ SideBar, CatalogPage , ProductDetailPage}) => {
    await SideBar.catalogMenu.click();
    await CatalogPage.productByName('Grey jacket').click();
    await expect(ProductDetailPage.productPrice).toBeVisible();
  });

  test("Verify product description exists", async ({ SideBar, CatalogPage , ProductDetailPage}) => {
    await SideBar.catalogMenu.click();
    await CatalogPage.productByName('Grey jacket').click();
    await expect(ProductDetailPage.productInfo).toBeVisible();
});

  test("Verify size selector dropdown exists", async ({ SideBar, CatalogPage, ProductDetailPage }) => {
    await SideBar.catalogMenu.click();
    await CatalogPage.productByName('Black heels').click();
    await expect(ProductDetailPage.productDropdownSize).toBeVisible();
  });

  test("Verify color selector dropdown exists", async ({ SideBar, CatalogPage, ProductDetailPage }) => {
    await SideBar.catalogMenu.click();
    await CatalogPage.productByName('Black heels').click();
    await expect(ProductDetailPage.productDropdownColor).toBeVisible();
  });

  test("Verify Add to Cart button is visible", async ({ SideBar, CatalogPage, ProductDetailPage }) => {
    await SideBar.catalogMenu.click();
    await CatalogPage.productByName('Black heels').click();
    await expect(ProductDetailPage.addToCart).toBeVisible();
  });

  test("Verify breadcrumb navigation on PDP", async ({ SideBar, CatalogPage, ProductDetailPage }) => {
    await SideBar.catalogMenu.click();
    await CatalogPage.productByName('Black heels').click();
    await expect(ProductDetailPage.productBreadcrumb).toBeVisible();
  });

  test.fixme("Verify shopping cart page structure", async ({ SideBar, NavigationBar, CatalogPage, CartPage, ProductDetailPage }) => {
    await SideBar.catalogMenu.click();
    await CatalogPage.productByName('Black heels').click();
    await ProductDetailPage.addToCartProduct('Red', 'S');
    await NavigationBar.checkOutMenu.click();
    await expect(CartPage.cartHeading).toBeVisible();
    await expect(CartPage.cartDescription).toBeVisible();
    await expect(CartPage.cartPrice).toBeVisible();
    await expect(CartPage.cartQty).toBeVisible();
    await expect(CartPage.cartTotal).toBeVisible();
  });

  test("Verify product details in cart", async ({ SideBar, NavigationBar, CatalogPage, ProductDetailPage, CartPage }) => {
    await SideBar.catalogMenu.click();
    await CatalogPage.productByName('Black heels').click();
    await ProductDetailPage.addToCartProduct('Red', 'S');
    await NavigationBar.checkOutMenu.click();
    await expect(CartPage.cartImage).toBeVisible();
    await expect(CartPage.cartLink).toBeVisible();
    await expect(CartPage.cartPriceSpan.first()).toBeVisible();
    await expect(CartPage.cartUpdate).toBeEditable();
  });

  test("Verify quantity field is editable", async ({ SideBar, NavigationBar, CatalogPage, ProductDetailPage, CartPage }) => {
    await SideBar.catalogMenu.click();
    await CatalogPage.productByName('Black heels').click();
    await ProductDetailPage.addToCartProduct('Red', 'S');
    await NavigationBar.checkOutMenu.click();
    await expect(CartPage.cartUpdate).toBeEditable();
  });

  test("Verify remove button exists for each item", async ({ NavigationBar, CartPage }) => {
    await NavigationBar.checkOutMenu.click();
    await expect(CartPage.cartRemove).toBeVisible();
  });

  test("Verify UPDATE button is present", async ({ NavigationBar, CartPage }) => {
    await NavigationBar.checkOutMenu.click();
    await expect(CartPage.cartUpdateButton).toBeVisible();
  });

  test("Verify CHECK OUT button exists", async ({ NavigationBar, CartPage }) => {
    await NavigationBar.checkOutMenu.click();
    await expect(CartPage.cartCheckOutButton).toBeVisible();
  });

  test("Verify order notes textarea exists", async ({ NavigationBar, CartPage }) => {
    await NavigationBar.checkOutMenu.click();
    await expect(CartPage.cartNote).toBeVisible();
  });

  test("Verify subtotal is calculated and shown", async ({ NavigationBar, CartPage }) => {
    await NavigationBar.checkOutMenu.click();
    await expect(CartPage.cartTotal).toBeVisible();
    await expect(CartPage.cartPriceSpan.first()).toContainText("£");
  });

  test("Verify checkout page displays", async ({ NavigationBar, CartPage, CheckoutPage }) => {
    await NavigationBar.checkOutMenu.click();
    await CartPage.cartCheckOutButton.click();
    await expect(CheckoutPage.headingCheckout).toBeVisible();
  });

  test("Verify contact information field exists", async ({ NavigationBar, CartPage, CheckoutPage }) => {
    await NavigationBar.checkOutMenu.click();
    await CartPage.cartCheckOutButton.click();
    await expect(CheckoutPage.emailTextbox).toBeVisible();
  });

  test("Verify all shipping address fields present", async ({ NavigationBar, CartPage, CheckoutPage }) => {
    await NavigationBar.checkOutMenu.click();
    await CartPage.cartCheckOutButton.click();
    await expect(CheckoutPage.firstNameTextbox).toBeVisible();
    await expect(CheckoutPage.lastNameTextbox).toBeVisible();
    await expect(CheckoutPage.addressTextbox).toBeVisible();
    await expect(CheckoutPage.cityTextbox).toBeVisible();
    await expect(CheckoutPage.postalCodeTextbox).toBeVisible();
    // locator belum di tambahkan
    // TODO: tambahkan locator Country dan State pada CheckoutPage.
  });

  test("Verify order summary sidebar", async ({ NavigationBar, CartPage, CheckoutPage }) => {
    await NavigationBar.checkOutMenu.click();
    await CartPage.cartCheckOutButton.click();
    await expect(CheckoutPage.greyJacketImage).toBeVisible();
    await expect(CheckoutPage.subtotalRow).toBeVisible();
    await expect(CheckoutPage.shippingRow).toBeVisible();
    await expect(CheckoutPage.totalRowHeader).toBeVisible();
  });

  test("Verify continue submit button exists", async ({ NavigationBar, CartPage, CheckoutPage }) => {
    await NavigationBar.checkOutMenu.click();
    await CartPage.cartCheckOutButton.click();
    // locator belum di tambahkan
    // TODO: tambahkan locator tombol Continue to shipping di CheckoutPage.
  });

  test("Verify login page has required fields", async ({ NavigationBar, loginPage }) => {
    await NavigationBar.logInMenu.click();
    await expect(loginPage.emailInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.signInButton).toBeVisible();
  });

  test("Verify forgot your password link exists", async ({ NavigationBar, loginPage }) => {
    await NavigationBar.logInMenu.click();
    await expect(loginPage.forgotPasswordLink).toBeVisible();
  });

  test("Verify guest checkout option on login page", async ({ NavigationBar }) => {
    await NavigationBar.logInMenu.click();
    // locator belum di tambahkan
    // TODO: tambahkan locator guest checkout pada LoginPage.
  });

  test("Verify registration page has all required fields", async ({ NavigationBar, SignUpPage }) => {
    await NavigationBar.signUpMenu.click();
    await expect(SignUpPage.firstNameInput).toBeVisible();
    await expect(SignUpPage.lastNameInput).toBeVisible();
    await expect(SignUpPage.emailInput).toBeVisible();
    await expect(SignUpPage.passwordInput).toBeVisible();
    await expect(SignUpPage.createAccountButton).toBeVisible();
  });

  test("Verify cart item count updates in real-time", async ({ NavigationBar }) => {
    await expect(NavigationBar.myCartMenu).toBeVisible();
    // locator belum di tambahkan
    // TODO: tambahkan locator count cart + aksi add item agar bisa verifikasi update count.
  });

  test("Verify copyright text exists in footer", async ({ Footer }) => {
    await expect(Footer.copyrightText).toBeVisible();
  });

  test("Verify Shopping Cart by Shopify link in footer", async ({ Footer }) => {
    // locator belum di tambahkan
    // TODO: tambahkan locator link 'Shopping Cart by Shopify' pada Footer.
    await expect(Footer.footerHeader).toBeVisible();
  });

  test("Verify Continue Shopping link exists on cart page", async ({ NavigationBar, CartPage }) => {
    await NavigationBar.checkOutMenu.click();
    await expect(CartPage.cartContinueShopping).toBeVisible();
  });

  test("Verify line item total display", async ({ NavigationBar, CartPage }) => {
    await NavigationBar.checkOutMenu.click();
    await expect(CartPage.cartPrice).toBeVisible();
    await expect(CartPage.cartQty).toBeVisible();
    await expect(CartPage.cartTotal).toBeVisible();
    await expect(CartPage.cartPriceSpan.first()).toBeVisible();
  });

  test("Verify message displayed when cart is empty", async ({ NavigationBar, CartPage }) => {
    await NavigationBar.checkOutMenu.click();
    await expect(CartPage.cartText).toBeVisible();
    await expect(CartPage.cartHeading).toBeVisible();
  });

  test("Verify RSS icon exists and is clickable", async ({ SideBar, page }) => {
    await expect(SideBar.rrssLink).toBeVisible();
    await expect(SideBar.rrssLink).toHaveAttribute("href", /./);
    await expect(SideBar.rrssLink).not.toHaveAttribute("href", "");
    await expect(page).toHaveURL(/sauce-demo\.myshopify\.com/);
  });

  test("Verify blog page displays correctly", async ({ SideBar, BlogPage }) => {
    await SideBar.blogMenu.click();
    await expect(BlogPage.newsLink).toBeVisible();
    await expect(BlogPage.firstPostLink).toBeVisible();
    await expect(BlogPage.postedByShopifyText).toBeVisible();
  });
});