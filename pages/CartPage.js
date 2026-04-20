export class CartPage {
    constructor(page) {
        this.page = page; 
        
        this.cartBreadcrumb = page.getByRole('link', { name: 'Cart'})
        this.cartHeading = page.getByRole('heading', { name: 'My Cart' })
        this.cartDescription = page.locator("div[class='six columns alpha description'] p")
        this.cartPrice = page.getByText('Price')
        this.cartQty = page.getByText('Qty')
        this.cartTotal = page.locator('div').filter({ hasText: 'Total' }).nth(5)
        this.cartImage = page.getByRole('img', { name: 'Grey jacket - Grey jacket' })
        this.cartLink = page.getByRole('link', { name: 'Grey jacket - Grey jacket' })
        this.cartText = page.locator('#cart').getByText('This area is populated by the')
        this.cartPriceSymbol = page.getByText('£').nth(3)
        this.cartUpdate = page.locator("//div[@class='one columns quantity tr']//input")
        this.cartPriceSpan = page.locator('span').filter({ hasText: '£' })
        this.cartRemove = page.locator('.one.column.remove.omega')
        this.cartContinueShopping = page.getByRole('link', { name: '« Continue Shopping' })
        this.cartNote = page.getByRole('textbox', { name: 'Add a note to your order...' })
        this.cartUpdateButton = page.getByRole('button', { name: 'Update' })
        this.cartCheckOutButton = page.getByRole('button', { name: 'Check Out' })
    }
}