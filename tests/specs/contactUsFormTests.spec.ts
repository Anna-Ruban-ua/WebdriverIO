import { generateValidEmail, generateInvalidEmail } from "../../support/dataGenerator.ts"
import { endpoints } from "../../support/endpoints.ts";
import homePage from "../pageobjects/homePage.ts";

describe('Form Validation Tests', () => {
    beforeEach(async () => {
      await homePage.openHomePage();
    });
  
    it('TC02: Valid email redirects to sign-up', async () => {
      await homePage.fillContactWithUsForm(generateValidEmail());
      await expect(browser).toHaveUrlContaining(endpoints.signUp);
    });
  
    it('TC03: Invalid email does not redirect to sign-up', async () => {
      await homePage.fillContactWithUsForm(generateInvalidEmail());
      await expect(browser).not.toHaveUrlContaining(endpoints.signUp);   
    })

});