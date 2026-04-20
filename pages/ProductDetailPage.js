export class ProductDetailPage {
    constructor(page) {
        this.page = page;
        this.addToCart = page.getByRole('button', { name: 'Add to Cart' });
        this.productInfo = page.locator('#product-info div').filter({ hasText: 'This area is populated by the' });
        this.productImage = page.getByRole('img', { name: 'Product Image' });
        this.productPrice = page.locator('.product-price');
        this.productName = page.locator("h1[itemprop='name']")
        this.productDropdownColor = page.getByLabel('Color');
        this.productDropdownSize = page.getByLabel('Size');
        this.productBreadcrumb = page.locator('#breadcrumb')


        this.productColorSet= (color) => this.productDropdownColor.selectOption(color);        
        this.productSizeSet = (size) => this.productDropdownSize.selectOption(size);
    }

    async addToCartProduct (color, size) {
        await this.productColorSet(color);
        await this.productSizeSet(size);
        await this.addToCart.click();
        await this.page.waitForTimeout(5000); //handline animation add to cart
    }
}