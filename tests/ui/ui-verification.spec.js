import { test, expect } from "../../fixture/pageManagementFixture.js";
import testData from "../../data/test-data.json";
const soldOutProduct = testData.dev["sold-out-product"];

test.describe("UI Verification", () => {

  test("@SMOKE Verify homepage loads successfully", async ({ page }) => {
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/sauce-demo\.myshopify\.com/);
  });
  test("@SMOKE Verify Navigation Bar displayed", async ({ NavigationBar }) => {
    await expect(NavigationBar.searchBox).toBeVisible();
    await expect(NavigationBar.searchButton).toBeVisible();
    await expect(NavigationBar.searchPageMenu).toBeVisible();
    await expect(NavigationBar.aboutUsMenu).toBeVisible();
    await expect(NavigationBar.logInMenu).toBeVisible();
    await expect(NavigationBar.signUpMenu).toBeVisible();
    await expect(NavigationBar.myCartMenu).toBeVisible();
    await expect(NavigationBar.checkOutMenu).toBeVisible();
  });
  test("@SMOKE Verify Side Bar displayed", async ({ SideBar }) => {
    await expect(SideBar.homeMenu).toBeVisible();
    await expect(SideBar.catalogMenu).toBeVisible();
    await expect(SideBar.blogMenu).toBeVisible();
    await expect(SideBar.aboutUsMenu).toBeVisible();
    await expect(SideBar.wishListMenu).toBeVisible();
    await expect(SideBar.referAFriendMenu).toBeVisible();
    await expect(SideBar.facebookLink).toBeVisible();
    await expect(SideBar.twitterLink).toBeVisible();
    await expect(SideBar.instagramLink).toBeVisible();
    await expect(SideBar.pinterestLink).toBeVisible();
    await expect(SideBar.rrssLink).toBeVisible();
  });
  test("@SMOKE Verify Footer displayed", async ({ Footer }) => {
    await expect(Footer.footerHeader).toBeVisible();
    await expect(Footer.searchLink).toBeVisible();
    await expect(Footer.aboutUsLink).toBeVisible();
    await expect(Footer.aboutUsHeader).toBeVisible();
    await expect(Footer.aboutUsText).toBeVisible();
    await expect(Footer.amexImage).toBeVisible();
    await expect(Footer.visaImage).toBeVisible();
    await expect(Footer.mastercardImage).toBeVisible();
    await expect(Footer.copyrightText).toBeVisible();
  });
  test("@SMOKE Verify Hompage Products are displayed", async ({ HomePage }) => {
    let numberOfProducts = await HomePage.productGrid.count();

    for (let i = 0; i < numberOfProducts; i++) {
      await expect(HomePage.productImagebyIndex(i)).toBeVisible();
      await expect(HomePage.productNameByIndex(i)).toBeVisible();
      await expect(HomePage.productPriceByIndex(i)).toBeVisible();
    }
  });
  test("@SMOKE Verify Catalog Products are displayed", async ({ CatalogPage, SideBar }) => {
    let numberOfProducts = await CatalogPage.allProductCards.count();
    await SideBar.catalogMenu.click();
    for (let i = 0; i < numberOfProducts; i++) {
      await expect(CatalogPage.productImagebyIndex(i)).toBeVisible();
      await expect(CatalogPage.productNameByIndex(i)).toBeVisible();
      await expect(CatalogPage.productPriceByIndex(i)).toBeVisible();
    }
  });
  test("@SMOKE Verify Product Sold Out Label", async ({ SideBar, CatalogPage }) => {
    await SideBar.catalogMenu.click();
    await expect(CatalogPage.productSoldOutLabelByName(soldOutProduct.product_name)).toBeVisible();
    await expect(CatalogPage.productSoldOutLabelByName(soldOutProduct.product_name)).toHaveText("Sold Out");
  });
  test("@SMOKE Verify Blog Page Content", async ({ SideBar, BlogPage }) => {
    await SideBar.blogMenu.click();
    await expect(BlogPage.newsLink).toBeVisible();
    await expect(BlogPage.dateText).toBeVisible();
    await expect(BlogPage.firstPostLink).toBeVisible();
    await expect(BlogPage.postedByShopifyText).toBeVisible();
    await expect(BlogPage.articlePost).toBeVisible();
  });
  test("@SMOKE Verify About Us Page Content", async ({ SideBar, AboutUsPage }) => {
    await SideBar.aboutUsMenu.click();
    await expect(AboutUsPage.aboutUsBreadcrumb).toBeVisible();
    await expect(AboutUsPage.aboutUsHeading).toBeVisible();
    await expect(AboutUsPage.aboutUsText).toBeVisible();
  });
});