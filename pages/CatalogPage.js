export class CatalogPage {
    constructor(page) {
        this.page = page;

        this.productBreadcrumb = page.getByRole('link', { name: 'Products' })
        this.productHeading = page.getByRole('heading', { name: 'Products' })
        this.productLink = page.getByRole('link', { name: 'Black heels Black heels £' })
    }
}
