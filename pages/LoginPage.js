import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  static PATH = "/account/login";

  constructor(page) {
    super(page);
    this.emailInput = page.getByRole("textbox", { name: "Email Address" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.signInButton = page.getByRole("button", { name: "Sign In" });
    this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot your password?' });
    this.errorMessage = page.getByText('Something went wrong.');

  }

  async open() {
    await super.open(LoginPage.PATH);
  }

  async fillCredentials({ email, password }) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }

  async submit() {
    await this.signInButton.click();
  }

  async login(credentials) {
    await this.open();
    await this.fillCredentials(credentials);
    await this.submit();
  }
}