export class BlogPage {
    constructor(page) {
        this.page = page;

        this.newsLink = this.page.getByRole('link', { name: 'News' })
        this.dateText = this.page.getByText('12 Mar')
        this.firstPostLink = this.page.getByRole('link', { name: 'First Post' })
        this.postedByShopifyText = this.page.getByText('Posted by Shopify')
        this.articlePost = page.locator('article.post.first.last.clearfix')
        this.backToPostsLink = this.page.getByRole('link', { name: 'Back to posts' })
        this.saveLink = this.page.getByRole('link', { name: 'Save' })
    }
}