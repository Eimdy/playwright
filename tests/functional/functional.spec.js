import { test, expect } from "../../fixture/pageManagementFixture.js";
import testData from "../../data/test-data.json";

const validUser = testData.dev["valid-user"];
const invalidUser = testData.dev["invalid-user"];

test.describe("Functional Scenario", () => {
	test.describe("Navigation Flows", () => {
		test("Verify clicking logo returns to homepage", async ({ page, SideBar, CatalogPage, HomePage }) => {
			await SideBar.catalogMenu.click();
			await expect(CatalogPage.productHeading).toBeVisible();
			await HomePage.sauceDemoLogo.click();
			await expect(page).toHaveURL(/sauce-demo\.myshopify\.com/);
			await expect(HomePage.sauceDemoLogo).toBeVisible();
			await expect(HomePage.sauceDemoDescription).toBeVisible();
		});

		test.skip("Verify Home menu link works", async ({ page, SideBar, CatalogPage, HomePage }) => {
			await SideBar.catalogMenu.click();
			await expect(CatalogPage.productHeading).toBeVisible();
			await SideBar.homeMenu.click();
			await expect(page).toHaveURL(/sauce-demo\.myshopify\.com/);
			await expect(HomePage.sauceDemoLogo).toBeVisible();
			await expect(HomePage.sauceDemoDescription).toBeVisible();
		});

		test("Verify Catalog menu link navigates correctly", async ({ SideBar, CatalogPage }) => {
			await SideBar.catalogMenu.click();
			await expect(CatalogPage.productBreadcrumb).toBeVisible();
			await expect(CatalogPage.productHeading).toBeVisible();
			await expect(CatalogPage.productLink).toBeVisible();
		});

		test("Verify Blog menu link functionality", async ({ SideBar, BlogPage }) => {
			await SideBar.blogMenu.click();
			await expect(BlogPage.newsLink).toBeVisible();
			await expect(BlogPage.firstPostLink).toBeVisible();
			await expect(BlogPage.postedByShopifyText).toBeVisible();
		});

		test("Verify About Us link works", async ({ SideBar, AboutUsPage }) => {
			await SideBar.aboutUsMenu.click();
			await expect(AboutUsPage.aboutUsBreadcrumb).toBeVisible();
			await expect(AboutUsPage.aboutUsHeading).toBeVisible();
			await expect(AboutUsPage.aboutUsText).toBeVisible();
		});

		test.skip("Verify Wishlist link behavior", async ({ SideBar }) => {
			await SideBar.wishListMenu.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator/konfirmasi target page, popup, atau widget wishlist.
		});

		test("Verify About Us link in top bar", async ({ NavigationBar, AboutUsPage }) => {
			await NavigationBar.aboutUsMenu.click();
			await expect(AboutUsPage.aboutUsBreadcrumb).toBeVisible();
			await expect(AboutUsPage.aboutUsHeading).toBeVisible();
		});

		test.skip("Verify My Cart link opens cart", async ({ NavigationBar, CartPage }) => {
			await NavigationBar.myCartMenu.click();
			// locator belum di tambahkan
			// TODO: konfirmasi apakah My Cart membuka page, drawer, atau dropdown sehingga assertion bisa dipastikan.
			await expect(CartPage.cartHeading).toBeVisible();
		});

		test.skip("Verify Check Out link in top bar", async ({ NavigationBar, CartPage }) => {
			await NavigationBar.checkOutMenu.click();
			await expect(CartPage.cartHeading).toBeVisible();
			await expect(CartPage.cartBreadcrumb).toBeVisible();
		});
	});

	test.describe("Search Flows", () => {
		test.skip("Verify search returns matching products", async ({ NavigationBar, SearchPage }) => {
			await NavigationBar.searchBox.fill("jacket");
			await NavigationBar.searchButton.click();
			// locator belum di tambahkan
			// TODO: locator hasil search untuk keyword jacket/noir jacket belum ada di SearchPage.
			await expect(SearchPage.searchHeading).toBeVisible();
		});

		test.skip("Verify search behavior with empty input", async ({ NavigationBar }) => {
			await NavigationBar.searchBox.fill("");
			await NavigationBar.searchButton.click();
			// locator belum di tambahkan
			// TODO: konfirmasi expected behavior empty search dan tambahkan locator hasilnya.
		});

		test.skip("Verify search with non matching keyword", async ({ NavigationBar }) => {
			await NavigationBar.searchBox.fill("xyz-not-found");
			await NavigationBar.searchButton.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator no results message pada SearchPage.
		});

		test.skip("Verify search handles special characters", async ({ NavigationBar }) => {
			await NavigationBar.searchBox.fill("@#$%");
			await NavigationBar.searchButton.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator/konfirmasi expected handling special characters.
		});

		test.skip("Verify partial keyword search", async ({ NavigationBar }) => {
			await NavigationBar.searchBox.fill("jac");
			await NavigationBar.searchButton.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator hasil partial search pada SearchPage.
		});
	});

	test.describe("Product And PDP Flows", () => {
		test.skip("Verify clicking product image navigates to PDP", async ({ SideBar }) => {
			await SideBar.catalogMenu.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator image product pada CatalogPage.
		});

		test("Verify clicking product title navigates to PDP", async ({ page, SideBar, CatalogPage }) => {
			await SideBar.catalogMenu.click();
			await expect(CatalogPage.productHeading).toBeVisible();
			await CatalogPage.productLink.click();
			await expect(page).not.toHaveURL(/\/collections\/all$/);
		});

		test.skip("Verify adding in stock product to cart", async ({ SideBar, CatalogPage }) => {
			await SideBar.catalogMenu.click();
			await expect(CatalogPage.productHeading).toBeVisible();
			await CatalogPage.productLink.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator variant selector, Add to Cart button, dan cart count.
		});

		test.skip("Verify SOLD OUT product cannot be added to cart", async ({ SideBar }) => {
			await SideBar.catalogMenu.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator PDP/produk Brown Shades dan button SOLD OUT.
		});

		test.skip("Verify clicking disabled SOLD OUT button has no effect", async ({ SideBar }) => {
			await SideBar.catalogMenu.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator button SOLD OUT dan indikator cart count/cart content.
		});

		test.skip("Verify size selector dropdown opens and allows selection", async ({ SideBar, CatalogPage }) => {
			await SideBar.catalogMenu.click();
			await expect(CatalogPage.productHeading).toBeVisible();
			await CatalogPage.productLink.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator dropdown size pada PDP.
		});

		test.skip("Verify color selector dropdown functionality", async ({ SideBar, CatalogPage }) => {
			await SideBar.catalogMenu.click();
			await expect(CatalogPage.productHeading).toBeVisible();
			await CatalogPage.productLink.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator dropdown color pada PDP.
		});
	});

	test.describe("Cart Flows", () => {
		test("Verify increasing quantity updates cart", async ({ NavigationBar, CartPage }) => {
			await NavigationBar.checkOutMenu.click();
			await expect(CartPage.cartHeading).toBeVisible();
			await CartPage.cartUpdate.fill("3");
			await CartPage.cartUpdateButton.click();
			await expect(CartPage.cartUpdate).toHaveValue("3");
			await expect(CartPage.cartTotal).toBeVisible();
		});

		test("Verify decreasing quantity updates cart", async ({ NavigationBar, CartPage }) => {
			await NavigationBar.checkOutMenu.click();
			await expect(CartPage.cartHeading).toBeVisible();
			await CartPage.cartUpdate.fill("1");
			await CartPage.cartUpdateButton.click();
			await expect(CartPage.cartUpdate).toHaveValue("1");
			await expect(CartPage.cartTotal).toBeVisible();
		});

		test("Verify behavior when quantity set to 0", async ({ NavigationBar, CartPage }) => {
			await NavigationBar.checkOutMenu.click();
			await expect(CartPage.cartHeading).toBeVisible();
			await CartPage.cartUpdate.fill("0");
			await CartPage.cartUpdateButton.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator empty cart message atau state validasi qty 0.
		});

		test("Verify negative quantity handling", async ({ NavigationBar, CartPage }) => {
			await NavigationBar.checkOutMenu.click();
			await expect(CartPage.cartHeading).toBeVisible();
			await CartPage.cartUpdate.fill("-1");
			await CartPage.cartUpdateButton.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator validation message untuk qty negatif.
		});

		test("Verify very large quantity handling", async ({ NavigationBar, CartPage }) => {
			await NavigationBar.checkOutMenu.click();
			await expect(CartPage.cartHeading).toBeVisible();
			await CartPage.cartUpdate.fill("9999");
			await CartPage.cartUpdateButton.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator stock limit/error handling untuk qty besar.
		});

		test("Verify text input in quantity field", async ({ NavigationBar, CartPage }) => {
			await NavigationBar.checkOutMenu.click();
			await expect(CartPage.cartHeading).toBeVisible();
			await CartPage.cartUpdate.fill("abc");
			await CartPage.cartUpdateButton.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator validation/error handling untuk non numeric quantity.
		});

		test("Verify removing product from cart", async ({ NavigationBar, CartPage }) => {
			await NavigationBar.checkOutMenu.click();
			await expect(CartPage.cartHeading).toBeVisible();
			await CartPage.cartRemove.click();
			await expect(CartPage.cartLink).not.toBeVisible();
		});

		test("Verify empty cart state after removing all items", async ({ NavigationBar, CartPage }) => {
			await NavigationBar.checkOutMenu.click();
			await expect(CartPage.cartHeading).toBeVisible();
			await CartPage.cartRemove.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator empty cart state agar verifikasi pasca remove lebih presisi.
		});

		test("Verify UPDATE button recalculates totals", async ({ NavigationBar, CartPage }) => {
			await NavigationBar.checkOutMenu.click();
			await expect(CartPage.cartHeading).toBeVisible();
			await CartPage.cartUpdate.fill("2");
			await CartPage.cartUpdateButton.click();
			await expect(CartPage.cartUpdate).toHaveValue("2");
			await expect(CartPage.cartTotal).toBeVisible();
		});

		test("Verify order notes can be added", async ({ NavigationBar, CartPage }) => {
			await NavigationBar.checkOutMenu.click();
			await expect(CartPage.cartHeading).toBeVisible();
			await CartPage.cartNote.fill("Please deliver carefully.");
			await expect(CartPage.cartNote).toHaveValue("Please deliver carefully.");
		});

		test("Verify CHECK OUT button navigates to checkout", async ({ NavigationBar, CartPage, CheckoutPage }) => {
			await NavigationBar.checkOutMenu.click();
			await expect(CartPage.cartHeading).toBeVisible();
			await CartPage.cartCheckOutButton.click();
			await expect(CheckoutPage.headingCheckout).toBeVisible();
			await expect(CheckoutPage.headingDelivery).toBeVisible();
		});

		test.skip("Verify checkout behavior with empty cart", async ({ NavigationBar, CartPage }) => {
			await NavigationBar.checkOutMenu.click();
			await expect(CartPage.cartHeading).toBeVisible();
			// locator belum di tambahkan
			// TODO: tambahkan locator empty cart state dan expected redirect/disabled state checkout.
		});

		test("Verify Continue Shopping link returns to catalog", async ({ NavigationBar, CartPage, CatalogPage }) => {
			await NavigationBar.checkOutMenu.click();
			await expect(CartPage.cartHeading).toBeVisible();
			await CartPage.cartContinueShopping.click();
			await expect(CatalogPage.productHeading).toBeVisible();
		});

		test.skip("Verify cart count updates when adding items", async ({ NavigationBar }) => {
			await expect(NavigationBar.myCartMenu).toBeVisible();
			// locator belum di tambahkan
			// TODO: tambahkan locator cart count dan action add item ke cart.
		});

		test.skip("Verify cart count decreases when removing items", async ({ NavigationBar, CartPage }) => {
			await NavigationBar.checkOutMenu.click();
			await expect(CartPage.cartHeading).toBeVisible();
			// locator belum di tambahkan
			// TODO: tambahkan locator cart count untuk verifikasi setelah remove item.
		});

		test.skip("Verify feedback when clicking Add to Cart", async ({ SideBar, CatalogPage }) => {
			await SideBar.catalogMenu.click();
			await expect(CatalogPage.productHeading).toBeVisible();
			await CatalogPage.productLink.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator success message/loading/cart count setelah Add to Cart.
		});

		test.skip("Verify line item total equals price quantity", async ({ NavigationBar, CartPage }) => {
			await NavigationBar.checkOutMenu.click();
			await expect(CartPage.cartHeading).toBeVisible();
			// locator belum di tambahkan
			// TODO: tambahkan locator spesifik line total per item untuk verifikasi formula price x quantity.
		});

		test.skip("Verify clicking My Cart link action", async ({ NavigationBar }) => {
			await NavigationBar.myCartMenu.click();
			// locator belum di tambahkan
			// TODO: konfirmasi perilaku My Cart drawer/page/dropdown lalu tambahkan locator target-nya.
		});
	});

	test.describe("Checkout Flows", () => {
		test("Verify entering email in contact field", async ({ NavigationBar, CartPage, CheckoutPage }) => {
			await NavigationBar.checkOutMenu.click();
			await expect(CartPage.cartHeading).toBeVisible();
			await CartPage.cartCheckOutButton.click();
			await CheckoutPage.emailTextbox.fill(validUser.email);
			await expect(CheckoutPage.emailTextbox).toHaveValue(validUser.email);
		});

		test("Verify completing shipping address", async ({ NavigationBar, CartPage, CheckoutPage }) => {
			await NavigationBar.checkOutMenu.click();
			await expect(CartPage.cartHeading).toBeVisible();
			await CartPage.cartCheckOutButton.click();
			await CheckoutPage.firstNameTextbox.fill(validUser.first_name);
			await CheckoutPage.lastNameTextbox.fill(validUser.last_name);
			await CheckoutPage.companyTextbox.fill(validUser.company);
			await CheckoutPage.addressTextbox.fill(validUser.address);
			await CheckoutPage.apartmentTextbox.fill(validUser.apaertment);
			await CheckoutPage.cityTextbox.fill(validUser.city);
			await CheckoutPage.postalCodeTextbox.fill(validUser.postal_code);
			await CheckoutPage.phoneTextbox.fill(validUser.phone_number);
			await expect(CheckoutPage.firstNameTextbox).toHaveValue(validUser.first_name);
			await expect(CheckoutPage.lastNameTextbox).toHaveValue(validUser.last_name);
			await expect(CheckoutPage.companyTextbox).toHaveValue(validUser.company);
			await expect(CheckoutPage.addressTextbox).toHaveValue(validUser.address);
			await expect(CheckoutPage.apartmentTextbox).toHaveValue(validUser.apaertment);
			await expect(CheckoutPage.cityTextbox).toHaveValue(validUser.city);
			await expect(CheckoutPage.postalCodeTextbox).toHaveValue(validUser.postal_code);
			await expect(CheckoutPage.phoneTextbox).toHaveValue(validUser.phone_number);
		});

		test.skip("Verify country selector dropdown", async ({ NavigationBar, CartPage, CheckoutPage }) => {
			await NavigationBar.checkOutMenu.click();
			await expect(CartPage.cartHeading).toBeVisible();
			await CartPage.cartCheckOutButton.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator country dropdown dan state selector pada CheckoutPage.
			await expect(CheckoutPage.headingDelivery).toBeVisible();
		});

		test.skip("Verify state options change with country", async ({ NavigationBar, CartPage, CheckoutPage }) => {
			await NavigationBar.checkOutMenu.click();
			await expect(CartPage.cartHeading).toBeVisible();
			await CartPage.cartCheckOutButton.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator country/state dropdown untuk verifikasi dependent options.
			await expect(CheckoutPage.headingDelivery).toBeVisible();
		});
	});

	test.describe("Authentication Flows", () => {
		test.skip("Verify successful login", async ({ NavigationBar, loginPage }) => {
			await NavigationBar.logInMenu.click();
			await loginPage.fillCredentials({ email: validUser.email, password: validUser.password });
			await loginPage.submit();
			// locator belum di tambahkan
			// TODO: tambahkan locator success state setelah login berhasil.
			await expect(loginPage.signInButton).toBeVisible();
		});

		test("Verify error for wrong email", async ({ NavigationBar, loginPage }) => {
			await NavigationBar.logInMenu.click();
			await loginPage.fillCredentials({ email: invalidUser.username, password: invalidUser.password });
			await loginPage.submit();
			await expect(loginPage.errorMessage).toBeVisible();
		});

		test("Verify error for wrong password", async ({ NavigationBar, loginPage }) => {
			await NavigationBar.logInMenu.click();
			await loginPage.fillCredentials({ email: validUser.email, password: invalidUser.password });
			await loginPage.submit();
			await expect(loginPage.errorMessage).toBeVisible();
		});

		test.skip("Verify validation for empty email", async ({ NavigationBar, loginPage }) => {
			await NavigationBar.logInMenu.click();
			await loginPage.passwordInput.fill(validUser.password);
			await loginPage.submit();
			// locator belum di tambahkan
			// TODO: tambahkan locator validation message email required pada LoginPage.
		});

		test.skip("Verify validation for empty password", async ({ NavigationBar, loginPage }) => {
			await NavigationBar.logInMenu.click();
			await loginPage.emailInput.fill(validUser.email);
			await loginPage.submit();
			// locator belum di tambahkan
			// TODO: tambahkan locator validation message password required pada LoginPage.
		});

		test.skip("Verify forgot password link functionality", async ({ NavigationBar, loginPage }) => {
			await NavigationBar.logInMenu.click();
			await loginPage.forgotPasswordLink.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator page/form password reset.
		});

		test.skip("Verify guest checkout option works", async ({ NavigationBar }) => {
			await NavigationBar.logInMenu.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator Continue as Guest pada LoginPage.
		});
	});

	test.describe("Registration Flows", () => {
		test.skip("Verify account creation with valid information", async ({ NavigationBar, SignUpPage }) => {
			await NavigationBar.signUpMenu.click();
			await SignUpPage.firstNameInput.fill(validUser.first_name);
			await SignUpPage.lastNameInput.fill(validUser.last_name);
			await SignUpPage.emailInput.fill(validUser.email);
			await SignUpPage.passwordInput.fill(validUser.password);
			// locator belum di tambahkan
			// TODO: data registrasi unik + locator success state belum ditambahkan.
			await expect(SignUpPage.createAccountHeading).toBeVisible();
		});

		test.skip("Verify error for duplicate email", async ({ NavigationBar, SignUpPage }) => {
			await NavigationBar.signUpMenu.click();
			await SignUpPage.firstNameInput.fill(validUser.first_name);
			await SignUpPage.lastNameInput.fill(validUser.last_name);
			await SignUpPage.emailInput.fill(validUser.email);
			await SignUpPage.passwordInput.fill(validUser.password);
			// locator belum di tambahkan
			// TODO: data existing email + locator error duplicate belum ditambahkan.
			await expect(SignUpPage.createAccountHeading).toBeVisible();
		});

		test.skip("Verify validation for empty first name", async ({ NavigationBar, SignUpPage }) => {
			await NavigationBar.signUpMenu.click();
			await SignUpPage.lastNameInput.fill(validUser.last_name);
			await SignUpPage.emailInput.fill(validUser.email);
			await SignUpPage.passwordInput.fill(validUser.password);
			await SignUpPage.createAccountButton.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator validation first name required.
		});

		test.skip("Verify email format validation", async ({ NavigationBar, SignUpPage }) => {
			await NavigationBar.signUpMenu.click();
			await SignUpPage.firstNameInput.fill(validUser.first_name);
			await SignUpPage.lastNameInput.fill(validUser.last_name);
			await SignUpPage.emailInput.fill("invalid-email");
			await SignUpPage.passwordInput.fill(validUser.password);
			await SignUpPage.createAccountButton.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator invalid email validation.
		});

		test.skip("Verify password strength validation", async ({ NavigationBar, SignUpPage }) => {
			await NavigationBar.signUpMenu.click();
			await SignUpPage.firstNameInput.fill(validUser.first_name);
			await SignUpPage.lastNameInput.fill(validUser.last_name);
			await SignUpPage.emailInput.fill(validUser.email);
			await SignUpPage.passwordInput.fill("123");
			await SignUpPage.createAccountButton.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator password strength validation.
		});
	});

	test.describe("Social, Blog, And Footer Flows", () => {
		test("Verify all social media icon links work correctly", async ({ SideBar }) => {
			await expect(SideBar.facebookLink).toHaveAttribute("href", /./);
			await expect(SideBar.twitterLink).toHaveAttribute("href", /./);
			await expect(SideBar.instagramLink).toHaveAttribute("href", /./);
			await expect(SideBar.pinterestLink).toHaveAttribute("href", /./);
			await expect(SideBar.rrssLink).toHaveAttribute("href", /./);
		});

		test.skip("Verify selecting different variants updates product details", async ({ SideBar, CatalogPage }) => {
			await SideBar.catalogMenu.click();
			await expect(CatalogPage.productHeading).toBeVisible();
			await CatalogPage.productLink.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator variant dropdown dan indikator perubahan price/image/availability.
		});

		test.skip("Verify Wishlist link functionality", async ({ SideBar }) => {
			await SideBar.wishListMenu.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator modal/page/overlay wishlist.
		});

		test.skip("Verify Refer a friend link behavior", async ({ SideBar }) => {
			await SideBar.referAFriendMenu.click();
			// locator belum di tambahkan
			// TODO: tambahkan locator modal, form, atau redirect referral.
		});

		test("Verify clicking Blog menu navigates correctly", async ({ SideBar, BlogPage }) => {
			await SideBar.blogMenu.click();
			await expect(BlogPage.newsLink).toBeVisible();
			await expect(BlogPage.firstPostLink).toBeVisible();
			await expect(BlogPage.blogDiv).toBeVisible();
		});

		test("Verify clicking a blog post opens full article", async ({ SideBar, BlogPage }) => {
			await SideBar.blogMenu.click();
			await BlogPage.firstPostLink.click();
			await expect(BlogPage.backToPostsLink).toBeVisible();
			await expect(BlogPage.postedByShopifyText).toBeVisible();
		});

		test.skip("Verify RSS icon opens feed in new tab or downloads", async ({ SideBar }) => {
			await expect(SideBar.rrssLink).toHaveAttribute("href", /./);
			// locator belum di tambahkan
			// TODO: konfirmasi target RSS feed/new tab/download sehingga assertion final bisa ditentukan.
		});

		test("Verify logo returns to homepage from every page", async ({ page, SideBar, CatalogPage, NavigationBar, CartPage, loginPage, HomePage }) => {
			await SideBar.catalogMenu.click();
			await expect(CatalogPage.productHeading).toBeVisible();
			await HomePage.sauceDemoLogo.click();
			await expect(page).toHaveURL(/sauce-demo\.myshopify\.com/);
			await expect(HomePage.sauceDemoLogo).toBeVisible();
			await expect(HomePage.sauceDemoDescription).toBeVisible();

			await NavigationBar.checkOutMenu.click();
			await expect(CartPage.cartHeading).toBeVisible();
			await HomePage.sauceDemoLogo.click();
			await expect(page).toHaveURL(/sauce-demo\.myshopify\.com/);
			await expect(HomePage.sauceDemoLogo).toBeVisible();
			await expect(HomePage.sauceDemoDescription).toBeVisible();

			await loginPage.open();
			await HomePage.sauceDemoLogo.click();
			await expect(page).toHaveURL(/sauce-demo\.myshopify\.com/);
			await expect(HomePage.sauceDemoLogo).toBeVisible();
			await expect(HomePage.sauceDemoDescription).toBeVisible();
		});

		test.skip("Verify Shopify footer link navigates correctly", async ({ Footer }) => {
			await expect(Footer.footerHeader).toBeVisible();
			// locator belum di tambahkan
			// TODO: tambahkan locator link Shopping Cart by Shopify pada Footer.
		});
	});
});