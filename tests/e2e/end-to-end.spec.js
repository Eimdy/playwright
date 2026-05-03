import { test, expect } from "../../fixture/pageManagementFixture.js";
import testData from "../../data/test-data.json";

const validUser = testData.dev["valid-user"];
const invalidUser = testData.dev["invalid-user"];

test.describe("E2E Scenarios", () => {
	test("Complete flow from homepage to checkout 1", async ({ SideBar, CatalogPage, NavigationBar, CartPage, CheckoutPage, ProductDetailPage }) => {
		await SideBar.catalogMenu.click();
		await expect(CatalogPage.productHeading).toBeVisible();
		await CatalogPage.productLink.click();
		await ProductDetailPage.addToCartProduct('Red', 'S');
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});
	test("Complete flow from homepage to checkout 2", async ({ SideBar, CatalogPage, NavigationBar, CartPage, CheckoutPage, ProductDetailPage }) => {
		await SideBar.catalogMenu.click();
		await expect(CatalogPage.productHeading).toBeVisible();
		await CatalogPage.productLink.click();
		await ProductDetailPage.addToCartProduct('Red', 'S');
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});

	test("Complete flow from homepage to checkout 3", async ({ SideBar, CatalogPage, NavigationBar, CartPage, CheckoutPage, ProductDetailPage }) => {
		await SideBar.catalogMenu.click();
		await expect(CatalogPage.productHeading).toBeVisible();
		await CatalogPage.productLink.click();
		await ProductDetailPage.addToCartProduct('Red', 'S');
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});
	test("Complete flow from homepage to checkout 4", async ({ SideBar, CatalogPage, NavigationBar, CartPage, CheckoutPage, ProductDetailPage }) => {
		await SideBar.catalogMenu.click();
		await expect(CatalogPage.productHeading).toBeVisible();
		await CatalogPage.productLink.click();
		await ProductDetailPage.addToCartProduct('Red', 'S');
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});
	test("Complete flow from homepage to checkout 5", async ({ SideBar, CatalogPage, NavigationBar, CartPage, CheckoutPage, ProductDetailPage }) => {
		await SideBar.catalogMenu.click();
		await expect(CatalogPage.productHeading).toBeVisible();
		await CatalogPage.productLink.click();
		await ProductDetailPage.addToCartProduct('Red', 'S');
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});
	test("Complete flow from homepage to checkout 6", async ({ SideBar, CatalogPage, NavigationBar, CartPage, CheckoutPage, ProductDetailPage }) => {
		await SideBar.catalogMenu.click();
		await expect(CatalogPage.productHeading).toBeVisible();
		await CatalogPage.productLink.click();
		await ProductDetailPage.addToCartProduct('Red', 'S');
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});
	test("Complete flow from homepage to checkout 7", async ({ SideBar, CatalogPage, NavigationBar, CartPage, CheckoutPage, ProductDetailPage }) => {
		await SideBar.catalogMenu.click();
		await expect(CatalogPage.productHeading).toBeVisible();
		await CatalogPage.productLink.click();
		await ProductDetailPage.addToCartProduct('Red', 'S');
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});
	test("Complete flow from homepage to checkout 8", async ({ SideBar, CatalogPage, NavigationBar, CartPage, CheckoutPage, ProductDetailPage }) => {
		await SideBar.catalogMenu.click();
		await expect(CatalogPage.productHeading).toBeVisible();
		await CatalogPage.productLink.click();
		await ProductDetailPage.addToCartProduct('Red', 'S');
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});
	test("Complete flow from homepage to checkout 9", async ({ SideBar, CatalogPage, NavigationBar, CartPage, CheckoutPage, ProductDetailPage }) => {
		await SideBar.catalogMenu.click();
		await expect(CatalogPage.productHeading).toBeVisible();
		await CatalogPage.productLink.click();
		await ProductDetailPage.addToCartProduct('Red', 'S');
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});
	test("Complete flow from homepage to checkout 10", async ({ SideBar, CatalogPage, NavigationBar, CartPage, CheckoutPage, ProductDetailPage }) => {
		await SideBar.catalogMenu.click();
		await expect(CatalogPage.productHeading).toBeVisible();
		await CatalogPage.productLink.click();
		await ProductDetailPage.addToCartProduct('Red', 'S');
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});
	test("Complete flow from homepage to checkout 11", async ({ SideBar, CatalogPage, NavigationBar, CartPage, CheckoutPage, ProductDetailPage }) => {
		await SideBar.catalogMenu.click();
		await expect(CatalogPage.productHeading).toBeVisible();
		await CatalogPage.productLink.click();
		await ProductDetailPage.addToCartProduct('Red', 'S');
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});
	test("Complete flow from homepage to checkout 12", async ({ SideBar, CatalogPage, NavigationBar, CartPage, CheckoutPage, ProductDetailPage }) => {
		await SideBar.catalogMenu.click();
		await expect(CatalogPage.productHeading).toBeVisible();
		await CatalogPage.productLink.click();
		await ProductDetailPage.addToCartProduct('Red', 'S');
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});
	test("Complete flow from homepage to checkout 13", async ({ SideBar, CatalogPage, NavigationBar, CartPage, CheckoutPage, ProductDetailPage }) => {
		await SideBar.catalogMenu.click();
		await expect(CatalogPage.productHeading).toBeVisible();
		await CatalogPage.productLink.click();
		await ProductDetailPage.addToCartProduct('Red', 'S');
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});
	test("Complete flow from homepage to checkout 14", async ({ SideBar, CatalogPage, NavigationBar, CartPage, CheckoutPage, ProductDetailPage }) => {
		await SideBar.catalogMenu.click();
		await expect(CatalogPage.productHeading).toBeVisible();
		await CatalogPage.productLink.click();
		await ProductDetailPage.addToCartProduct('Red', 'S');
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});
	test("Complete flow from homepage to checkout 15", async ({ SideBar, CatalogPage, NavigationBar, CartPage, CheckoutPage, ProductDetailPage }) => {
		await SideBar.catalogMenu.click();
		await expect(CatalogPage.productHeading).toBeVisible();
		await CatalogPage.productLink.click();
		await ProductDetailPage.addToCartProduct('Red', 'S');
		await NavigationBar.checkOutMenu.click();
		await expect(CartPage.cartHeading).toBeVisible();
		await CartPage.cartCheckOutButton.click();
		await expect(CheckoutPage.headingCheckout).toBeVisible();
	});
});
