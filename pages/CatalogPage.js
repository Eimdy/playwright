export class CatalogPage {
    constructor(page) {
        this.page = page;

        this.productBreadcrumb = page.getByRole('link', { name: 'Products' })
        this.productHeading = page.getByRole('heading', { name: 'Products' })
        this.productLink = page.getByRole('link', { name: 'Black heels Black heels £' })
        this.productGrid = page.locator('section.product-grid > .columns');
        this.allProductCards = page.locator('section.product-grid div.four.columns > a');

        //Dynamic locators by index
        this.productGridByIndex = (index) => this.productGrid.nth(index); 
        this.productNameByIndex = (index) => this.productGridByIndex(index).locator('h3')
        this.productPriceByIndex = (index) => this.productGridByIndex(index).locator('h4')
        this.productImagebyIndex = (index) => this.productGridByIndex(index).locator('img')
        this.productSoldOutLabelByIndex = (index) => this.productGridByIndex(index).locator('.sold-out')

        //Dynamic locators by name
        this.productByName = (name) =>   this.allProductCards.filter({    has: this.page.getByRole('heading', { level: 3, name: name, exact: true }) });
        this.productPriceByName = async (name) =>  await this.productByName(name).locator('h4').innerText();
        this.productImageByName = (name) =>  this.productByName(name).locator('img');
        this.productSoldOutLabelByName = (name) => this.productByName(name).locator('.sold-out')
    }
    async getTotalProduct() {
        return await this.allProductCards.count();
    }
}
