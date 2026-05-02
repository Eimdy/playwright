export class CheckoutPage {
    constructor(page) {
        this.page = page;


        this.headingCheckout = page.getByRole('heading', { name: 'Contact' });
        this.signInLink = page.getByRole('link', { name: 'Sign in' });
        this.emailTextbox = page.getByRole('textbox', { name: 'Email' });
        this.newsOffersCheckbox = page.getByRole('checkbox', { name: 'Email me with news and offers' });
        this.headingDelivery = page.getByRole('heading', { name: 'Delivery' });
        this.firstNameTextbox = page.getByRole('textbox', { name: 'First name (optional)' });
        this.lastNameTextbox = page.getByRole('textbox', { name: 'Last name' });
        this.companyTextbox = page.getByRole('textbox', { name: 'Company (optional)' });
        this.addressTextbox = page.getByRole('textbox', { name: 'Address' });
        this.apartmentTextbox = page.getByRole('textbox', { name: 'Apartment, suite, etc. (' });
        this.cityTextbox = page.getByRole('textbox', { name: 'City' });
        this.postalCodeTextbox = page.getByRole('textbox', { name: 'Postal code' });
        this.phoneTextbox = page.getByRole('textbox', { name: 'Phone (optional)' });
        this.saveInformationCheckbox = page.getByRole('checkbox', { name: 'Save this information for' });
        this.headingShippingMethod = page.getByRole('heading', { name: 'Shipping method' });
        this.cardNumberTextbox = page.locator('iframe[name="card-fields-number-ux1unc4sk4000000"]').contentFrame().getByRole('textbox', { name: 'Card number' });
        this.expirationDateTextbox = page.locator('iframe[name="card-fields-expiry-sqg8avt2sr000000"]').contentFrame().getByRole('textbox', { name: 'Expiration date (MM / YY)' });
        this.securityCodeTextbox = page.locator('iframe[name="card-fields-verification_value-9r7q500heq000000"]').contentFrame().getByRole('textbox', { name: 'Security code' });
        this.nameOnCardTextbox = page.locator('iframe[name="card-fields-name-nsewtm1vug000000"]').contentFrame().getByRole('textbox', { name: 'Name on card' });
        this.useShippingAddressCheckbox = page.getByRole('checkbox', { name: 'Use shipping address as' });
        this.payNowButton = page.getByRole('button', { name: 'Pay now' });
        this.termsOfServiceButton = page.getByRole('button', { name: 'Terms of service' });
        this.termsOfServiceText = page.getByText('Terms of serviceTERMS OF');
        this.closeButton = page.getByRole('button', { name: 'Close' });
        this.greyJacketImage = page.getByRole('img', { name: 'Grey jacket' });
        this.greyJacketText = page.getByText('Grey jacket').first();
        this.poundSign = page.getByText('£').nth(1);
        this.discountCodeTextbox = page.getByRole('textbox', { name: 'Discount code' });
        this.discountCodeApplyText = page.getByText('Discount codeApply');
        this.subtotalRow = page.getByRole('row', { name: 'Subtotal £' });
        this.shippingRow = page.getByRole('row', { name: 'Shipping Enter shipping' });
        this.totalRowHeader = page.getByRole('rowheader', { name: 'Total', exact: true });
        this.totalCell = page.getByRole('cell', { name: 'GBP £' }).getByRole('strong');
        this.gbpText = page.getByText('GBP');
        this.paymentButton = page.getByRole('button', { name: 'Pay now' });
    }
}