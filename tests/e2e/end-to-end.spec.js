import { test, expect } from "../../fixture/pageManagementFixture.js";
import testData from "../../data/test-data.json";

const validUser = testData.dev["valid-user"];
const invalidUser = testData.dev["invalid-user"];

test.describe("E2E Scenarios", () => {
	test("Complete flow from homepage to checkout", async ({ SideBar, CatalogPage, NavigationBar, CartPage, CheckoutPage, ProductDetailPage }) => {
		await SideBar.catalogMenu.click();
		await expect(CatalogPage.productHeading).toBeVisible();
		await CatalogPage.productLink.click();
		await ProductDetailPage.addToCartProduct('Red', 'S');
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});

	test.skip("Add multiple products and checkout", async ({ SideBar, CatalogPage, NavigationBar, CartPage, CheckoutPage }) => {
		await SideBar.catalogMenu.click();
		await expect(CatalogPage.productHeading).toBeVisible();
		await CatalogPage.productLink.click();
		// locator belum di tambahkan
		// TODO: locator add multiple products (Black heels + Grey jacket) belum tersedia di page objects.
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});

	test.skip("Complete flow using search", async ({ NavigationBar, SearchPage, CartPage, CheckoutPage }) => {
		await NavigationBar.searchBox.fill("jacket");
		await NavigationBar.searchButton.click();
		await expect(SearchPage.searchHeading).toBeVisible();
		// locator belum di tambahkan
		// TODO: locator hasil pencarian jacket + add to cart dari search result belum lengkap.
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});

	test.skip("Guest user completes entire checkout process", async ({ NavigationBar, CartPage, CheckoutPage }) => {
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		// locator belum di tambahkan
		// TODO: locator Continue as Guest belum tersedia di LoginPage/CheckoutPage.
		await CheckoutPage.emailTextbox.fill(validUser.email);
		await CheckoutPage.firstNameTextbox.fill(validUser.first_name);
		await CheckoutPage.lastNameTextbox.fill(validUser.last_name);
		await CheckoutPage.addressTextbox.fill(validUser.address);
		await CheckoutPage.cityTextbox.fill(validUser.city);
		await CheckoutPage.postalCodeTextbox.fill(validUser.postal_code);
		await expect(CheckoutPage.headingDelivery).toBeVisible();
	});

	test.skip("Login then complete purchase", async ({ NavigationBar, loginPage, SideBar, CatalogPage, CartPage, CheckoutPage }) => {
		await NavigationBar.logInMenu.click();
		await loginPage.fillCredentials({ email: validUser.email, password: validUser.password });
		await loginPage.submit();
		// locator belum di tambahkan
		// TODO: locator success state login belum tersedia.
		await SideBar.catalogMenu.click();
		await expect(CatalogPage.productHeading).toBeVisible();
		await CatalogPage.productLink.click();
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});

	test.skip("Create account then purchase", async ({ NavigationBar, SignUpPage, SideBar, CatalogPage, CartPage, CheckoutPage }) => {
		await NavigationBar.signUpMenu.click();
		await SignUpPage.firstNameInput.fill(validUser.first_name);
		await SignUpPage.lastNameInput.fill(validUser.last_name);
		await SignUpPage.emailInput.fill(validUser.email);
		await SignUpPage.passwordInput.fill(validUser.password);
		await SignUpPage.createAccountButton.click();
		// locator belum di tambahkan
		// TODO: data email unik + locator sukses register belum tersedia.
		await SideBar.catalogMenu.click();
		await expect(CatalogPage.productHeading).toBeVisible();
		await CatalogPage.productLink.click();
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});

	test("Modify cart before checkout", async ({ NavigationBar, CartPage, CheckoutPage }) => {
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartUpdate.fill("3");
		await CartPage.cartUpdateButton.click();
		await expect(CartPage.cartUpdate).toHaveValue("3");
		await expect(CartPage.cartTotal).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});

	test("Remove product from cart", async ({ NavigationBar, CartPage }) => {
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartRemove.click();
		await expect(CartPage.cartLink).not.toBeVisible();
	});

	test.skip("Update multiple items and proceed", async ({ NavigationBar, CartPage, CheckoutPage }) => {
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		// locator belum di tambahkan
		// TODO: locator quantity per line item untuk multi product belum tersedia di CartPage.
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});

	test.skip("Fail login then succeed", async ({ NavigationBar, loginPage }) => {
		await NavigationBar.logInMenu.click();
		await loginPage.fillCredentials({ email: validUser.email, password: invalidUser.password });
		await loginPage.submit();
		await expect(loginPage.errorMessage).toBeVisible();
		await loginPage.fillCredentials({ email: validUser.email, password: validUser.password });
		await loginPage.submit();
		// locator belum di tambahkan
		// TODO: locator sukses login belum tersedia.
	});

	test.skip("Navigate using breadcrumbs", async ({ SideBar, CatalogPage, ProductDetailPage }) => {
		await SideBar.catalogMenu.click();
		await expect(CatalogPage.productHeading).toBeVisible();
		await CatalogPage.productLink.click();
		await expect(ProductDetailPage.productBreadcrumb).toBeVisible();
	});

	test.skip("Direct add from homepage if possible", async ({ HomePage, NavigationBar, CartPage, ProductDetailPage }) => {
		await HomePage.productGridByIndex(1).click();
		await ProductDetailPage.addToCartProduct('Red', 'S');
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
	});

	test.skip("Empty cart then add new items", async ({ NavigationBar, CartPage, SideBar, CatalogPage }) => {
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartRemove.click();
		// locator belum di tambahkan
		// TODO: locator empty cart message dan add item baru pasca empty belum tersedia.
		await CartPage.cartContinueShopping.click();
		await expect(CatalogPage.productHeading).toBeVisible();
		await SideBar.catalogMenu.click();
	});

	test.skip("Attempt to buy sold out product", async ({ SideBar, NavigationBar, CartPage }) => {
		await SideBar.catalogMenu.click();
		// locator belum di tambahkan
		// TODO: locator Brown Shades sold out + disabled button + verifikasi cart unchanged belum tersedia.
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
	});

	test.skip("Verify cart retains items during navigation", async ({ NavigationBar, SideBar, HomePage, CartPage }) => {
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartContinueShopping.click();
		await SideBar.blogMenu.click();
		await SideBar.aboutUsMenu.click();
		await SideBar.homeMenu.click();
		await expect(HomePage.sauceDemoLogo).toBeVisible();
		// locator belum di tambahkan
		// TODO: locator item persistence / cart count consistency belum tersedia.
	});

	test.skip("Add product to wishlist", async ({ SideBar }) => {
		await SideBar.catalogMenu.click();
		// locator belum di tambahkan
		// TODO: locator Add to Wishlist dan halaman wishlist belum tersedia.
	});

	test.skip("Handle form errors and correct", async ({ NavigationBar, CartPage, CheckoutPage }) => {
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await CheckoutPage.emailTextbox.fill("");
		// locator belum di tambahkan
		// TODO: locator tombol continue + pesan validasi form checkout belum tersedia.
	});

	test("Add order notes and complete checkout", async ({ NavigationBar, CartPage, CheckoutPage }) => {
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartNote.fill("Please gift wrap");
		await expect(CartPage.cartNote).toHaveValue("Please gift wrap");
		await CartPage.cartUpdateButton.click();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});

	test.skip("Request password reset", async ({ NavigationBar, loginPage }) => {
		await NavigationBar.logInMenu.click();
		await loginPage.forgotPasswordLink.click();
		// locator belum di tambahkan
		// TODO: locator form reset password dan pesan konfirmasi belum tersedia.
	});

	test.skip("Share product on social media", async ({ SideBar, CatalogPage }) => {
		await SideBar.catalogMenu.click();
		await CatalogPage.productLink.click();
		// locator belum di tambahkan
		// TODO: locator social share button/dialog pada PDP belum tersedia.
	});

	test.skip("Search then filter results if available", async ({ NavigationBar, SearchPage }) => {
		await NavigationBar.searchBox.fill("jacket");
		await NavigationBar.searchButton.click();
		await expect(SearchPage.searchHeading).toBeVisible();
		// locator belum di tambahkan
		// TODO: locator filter hasil search belum tersedia.
	});

	test.skip("Verify cart syncs across browser tabs", async ({ page, NavigationBar, CartPage }) => {
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		const secondTab = await page.context().newPage();
		await secondTab.goto("/");
		// locator belum di tambahkan
		// TODO: locator verifikasi sync cart antar tab belum tersedia.
		await secondTab.close();
	});

	test("Leave checkout and return", async ({ HomePage, NavigationBar, CartPage, CheckoutPage }) => {
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
		await HomePage.sauceDemoLogo.click();
		await expect(HomePage.sauceDemoDescription).toBeVisible();
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});

	test.skip("Verify responsive design works", async ({ page, NavigationBar, CartPage, CheckoutPage }) => {
		await page.setViewportSize({ width: 390, height: 844 });
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
		// locator belum di tambahkan
		// TODO: tambahkan assertion spesifik menu mobile/responsive state.
	});

	test("Set qty to 0 and verify removal", async ({ NavigationBar, CartPage }) => {
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartUpdate.fill("0");
		await CartPage.cartUpdateButton.click();
		// locator belum di tambahkan
		// TODO: tambahkan locator empty cart message untuk verifikasi final remove.
	});

	test.skip("Enter promo discount code if available", async ({ NavigationBar, CartPage, CheckoutPage }) => {
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
		await CheckoutPage.discountCodeTextbox.fill("PROMO10");
		await expect(CheckoutPage.discountCodeApplyText).toBeVisible();
	});

	test.skip("Verify cart behavior after logout", async ({ NavigationBar, loginPage, CartPage }) => {
		await NavigationBar.logInMenu.click();
		await loginPage.fillCredentials({ email: validUser.email, password: validUser.password });
		await loginPage.submit();
		// locator belum di tambahkan
		// TODO: locator logout + expected behavior cart after logout belum tersedia.
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
	});

	test.skip("Verify logged in user has prefilled data", async ({ NavigationBar, loginPage, CartPage, CheckoutPage }) => {
		await NavigationBar.logInMenu.click();
		await loginPage.fillCredentials({ email: validUser.email, password: validUser.password });
		await loginPage.submit();
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
		// locator belum di tambahkan
		// TODO: locator/asumsi prefilled user profile belum terkonfirmasi.
	});

	test("Use browser back after adding to cart", async ({ page, SideBar, CatalogPage, NavigationBar, CartPage }) => {
		await SideBar.catalogMenu.click();
		await expect(CatalogPage.productHeading).toBeVisible();
		await CatalogPage.productLink.click();
		await page.goBack();
		await expect(CatalogPage.productHeading).toBeVisible();
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
	});

	test("Proceed through to payment", async ({ NavigationBar, CartPage, CheckoutPage }) => {
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
		await CheckoutPage.emailTextbox.fill(validUser.email);
		await CheckoutPage.firstNameTextbox.fill(validUser.first_name);
		await CheckoutPage.lastNameTextbox.fill(validUser.last_name);
		await CheckoutPage.addressTextbox.fill(validUser.address);
		await CheckoutPage.cityTextbox.fill(validUser.city);
		await CheckoutPage.postalCodeTextbox.fill(validUser.postal_code);
		await expect(CheckoutPage.headingShippingMethod).toBeVisible();
	});

	test("Complete flow homepage to blog to reading post", async ({ SideBar, BlogPage }) => {
		await SideBar.blogMenu.click();
		await expect(BlogPage.newsLink).toBeVisible();
		await expect(BlogPage.firstPostLink).toBeVisible();
		await BlogPage.firstPostLink.click();
		await expect(BlogPage.postedByShopifyText).toBeVisible();
		await expect(BlogPage.backToPostsLink).toBeVisible();
		await BlogPage.backToPostsLink.click();
		await expect(BlogPage.newsLink).toBeVisible();
	});

	test.skip("Access cart URL directly with empty cart", async ({ page, CartPage }) => {
		await page.goto("/cart");
		await expect(CartPage.cartHeading).toBeVisible();
		// locator belum di tambahkan
		// TODO: locator empty cart state belum tersedia.
	});

	test.skip("Try to access checkout with empty cart", async ({ page, CheckoutPage }) => {
		await page.goto("/checkout");
		// locator belum di tambahkan
		// TODO: konfirmasi expected redirect/blocked behavior dan locator messaging.
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});

	test.skip("Add multiple items update quantities proceed", async ({ NavigationBar, CartPage, CheckoutPage }) => {
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		// locator belum di tambahkan
		// TODO: locator qty per item untuk multi product update belum tersedia.
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});

	test.skip("Verify cart count stays consistent across navigation", async ({ NavigationBar, SideBar, CatalogPage }) => {
		await expect(NavigationBar.myCartMenu).toBeVisible();
		await SideBar.blogMenu.click();
		await SideBar.aboutUsMenu.click();
		await SideBar.catalogMenu.click();
		await expect(CatalogPage.productHeading).toBeVisible();
		await expect(NavigationBar.cartCounter).toBeVisible();
	});

	test.skip("Select specific variant and verify in cart", async ({ SideBar, CatalogPage, NavigationBar, CartPage, ProductDetailPage }) => {
		await SideBar.catalogMenu.click();
		await expect(CatalogPage.productHeading).toBeVisible();
		await CatalogPage.productLink.click();
		await ProductDetailPage.addToCartProduct('Red', 'S');
		// locator belum di tambahkan
		// TODO: locator variant text in cart belum tersedia untuk verifikasi variant yang dipilih.
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
	});

	test.skip("Add item continue shopping add more", async ({ SideBar, CatalogPage, NavigationBar, CartPage, ProductDetailPage }) => {
		await SideBar.catalogMenu.click();
		await expect(CatalogPage.productHeading).toBeVisible();
		await CatalogPage.productLink.click();
		await ProductDetailPage.addToCartProduct('Red', 'S');
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
	});

	test.skip("Navigate from social icons to RSS feed", async ({ SideBar, page }) => {
		await expect(SideBar.rrssLink).toHaveAttribute("href", /./);
		const rssHref = await SideBar.rrssLink.getAttribute("href");
		if (rssHref) {
			await page.goto(rssHref);
		}
		// locator belum di tambahkan
		// TODO: locator/assertion konten RSS XML/Atom belum tersedia.
	});
});
