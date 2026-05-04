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

});
