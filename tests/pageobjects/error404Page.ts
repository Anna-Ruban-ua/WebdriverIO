import BasePage from "./basePage.ts";
import { generateInvalidUrl } from "../../support/dataGenerator.ts";

class Error404Page extends BasePage {
  
  get errorBlock () { return $('div.c-cUhiIV.c-cUhiIV-ibKVMeD-css') }
  get backToHomeButton () { return this.errorBlock.$('a[href="/"]') }

  async openInvalidPage() {
    await this.open(generateInvalidUrl());
    await this.acceptCookiesIfVisible();
  }

  async isBackToHomeVisible() {
    await this.backToHomeButton.scrollIntoView();
    return this.backToHomeButton.isDisplayed();
  }

  async getErrorText() {
    return this.errorBlock.getText();
  }

  async clickBackToHome() {
    await this.backToHomeButton.click();
  }
}

export default new Error404Page();