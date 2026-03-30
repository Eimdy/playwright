export class SideBar {
    constructor(page) {
        this.page = page;


        this.homeMenu = page.getByRole('link', { name: 'Home' });
        this.catalogMenu = page.getByRole('link', { name: 'Catalog' });
        this.blogMenu = page.getByRole('link', { name: 'Blog' });
        this.aboutUsMenu = page.locator('#main-menu').getByRole('link', { name: 'About Us' });
        this.wishListMenu = page.getByRole('link', { name: 'Wish list' });
        this.referAFriendMenu = page.getByRole('link', { name: 'Refer a friend' });
        this.facebookLink = page.locator('.facebook');
        this.twitterLink = page.locator('.twitter');
        this.instagramLink = page.locator('.instagram');
        this.pinterestLink = page.locator('.pinterest');
        this.rrssLink = page.locator('.rss');
    }
}