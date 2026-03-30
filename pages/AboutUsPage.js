export class AboutUsPage {
  constructor(page) {
    this.page = page;

    this.aboutUsBreadcrumb = page.locator('#breadcrumb').getByRole('link', { name: 'About Us' })
    this.aboutUsHeading = page.locator('#page-content').getByRole('heading', { name: 'About Us' })
    this.aboutUsText = page.locator('#page-content').getByText('This is a demo site created for Sauce, an awesome new way to make your Shopify')
  }
}