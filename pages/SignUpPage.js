export class SignUpPage {
    constructor(page) {
        this.page = page;  

        this.registerBreadcrumb = page.getByRole('link', { name: 'Register' })
        this.createAccountHeading = page.getByRole('heading', { name: 'Create Account' })
        this.firstNameInput = page.locator('input[name="customer[first_name]"]')
        this.lastNameInput = page.locator('input[name="customer[last_name]"]')
        this.emailInput = page.locator('input[name="customer[email]"]')
        this.passwordInput = page.locator('input[name="customer[password]"]')
        this.createAccountButton = page.getByRole('button', { name: 'Create' })
    }
}