export class HomePage {
  constructor(page) {
    this.page = page;
   
    this.sauceDemoLogo = page.getByRole('link', { name: 'Sauce Demo' });
    this.sauceDemoDescription = page.getByRole('heading', { name: 'Just a demo site showing off' });
    this.greyJacketLink = page.getByRole('link', { name: 'Grey jacket Grey jacket £' });
    this.productGrid = page.locator('section.product-grid > .columns');

    //Dynamic locators
    this.productGridByIndex = (index) => this.productGrid.nth(index); 
    this.productNameByIndex = (index) => this.productGridByIndex(index).locator('h3')
    this.productPriceByIndex = (index) => this.productGridByIndex(index).locator('h4')
    this.productImagebyIndex = (index) => this.productGridByIndex(index).locator('img')
    
  } 
}