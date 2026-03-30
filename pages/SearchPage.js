export class SearchPage {
    constructor(page) {
    this.page = page;

    this.searchBreadCrumb = page.locator('#breadcrumb').getByRole('link', { name: 'Search' })
    this.searchHeading = page.getByRole('heading', { name: 'Search Results' })
    this.searchResultsText = page.getByText('Showing results for grey')
    this.searchResultLink = page.getByRole('link', { name: 'Grey jacket Grey jacket £' })
    }
}