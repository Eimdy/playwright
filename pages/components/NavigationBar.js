export class NavigationBar {
    constructor(page) {
        this.page = page;

        this.searchBox = page.getByRole('textbox', { name: 'Search' });
        this.searchButton = page.getByRole('button', { name: 'Submit' });
        this.searchPageMenu = page.getByRole('banner').getByRole('link', { name: 'Search' });
        this.aboutUsMenu = page.getByRole('banner').getByRole('link', { name: 'About Us' });
        this.logInMenu = page.getByRole('link', { name: 'Log In' });
        this.signUpMenu = page.getByRole('link', { name: 'Sign up' });
        this.myCartMenu = page.locator('.cart.desktop');
        this.cartCounter = page.locator('#cart-target-desktop > span')
        this.checkOutMenu = page.getByRole('link', { name: 'Check Out' });
    }
}