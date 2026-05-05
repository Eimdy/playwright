export class Footer {
    constructor(page) {
        this.page = page;

        this.footerHeader = page.getByRole('heading', { name: 'Footer' });
        this.searchLink = page.locator('a').filter({ hasText: 'Search' }).first()
        this.aboutUsLink = page.locator('a').filter({ hasText: 'About Us' }).last()
        this.aboutUsHeader = page.locator('#footer-content').getByRole('heading', { name: 'About Us' });
        this.aboutUsText = page.locator('#footer-content').getByText('This is a demo site created for Sauce, an awesome new way to make your Shopify');
        this.amexImage = page.getByRole('img', { name: 'We accept Amex' });
        this.visaImage = page.getByRole('img', { name: 'We accept Visa' });
        this.mastercardImage = page.getByRole('img', { name: 'We accept Mastercard' });
        this.copyrightText = page.getByText('Copyright © 2026 Sauce Demo.');
    }
}
