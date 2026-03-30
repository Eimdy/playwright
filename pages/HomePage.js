export class HomePage {
  constructor(page) {
    this.page = page;
   
    this.sauceDemoLogo = page.getByRole('link', { name: 'Sauce Demo' });
    this.sauceDemoDescription = page.getByRole('heading', { name: 'Just a demo site showing off' });
    this.greyJacketLink = page.getByRole('link', { name: 'Grey jacket Grey jacket £' });

  }
}