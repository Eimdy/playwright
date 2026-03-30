import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { AboutUsPage } from "../pages/AboutUsPage";
import { BasePage } from "../pages/BasePage";
import { BlogPage } from "../pages/BlogPage";
import { CartPage } from "../pages/CartPage";
import { CatalogPage } from "../pages/CatalogPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { HomePage } from "../pages/HomePage";
import { SearchPage } from "../pages/SearchPage";
import { SignUpPage } from "../pages/SignUpPage";
import { Footer } from "../pages/components/Footer";
import { NavigationBar } from "../pages/components/NavigationBar";
import { SideBar } from "../pages/components/SideBar";


export const test = base.extend({

  forEachTest: [async ({ page }, use) => {
    // This code runs before every test.
    await page.goto('/');
    await use();
  }, { auto: true }], 

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  AboutUsPage: async ({ page }, use) => {
    await use(new AboutUsPage(page));
  },

  BasePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },

  BlogPage: async ({ page }, use) => {
    await use(new BlogPage(page));
  },

  CartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  CatalogPage: async ({ page }, use) => {
    await use(new CatalogPage(page));
  },

  CheckoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },

  HomePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  SearchPage: async({ page }, use) => {
    await use(new SearchPage(page));
  },

  SignUpPage: async({ page }, use) => {
    await use(new SignUpPage(page));
  },

  Footer: async({ page }, use) => {
    await use(new Footer(page));
  },
  NavigationBar: async({ page }, use) => {
    await use(new NavigationBar(page));
  },

  SideBar: async({ page }, use) => {
    await use(new SideBar(page));
  }
});

export { expect };