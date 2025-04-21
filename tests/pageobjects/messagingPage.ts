import BasePage from "./basePage.ts";
import { endpoints } from "../../support/endpoints.ts";
import { currencyLabels } from "../../support/texts.ts";

class MessagingPage extends BasePage {
  get currencySelect() { return $('#currency-filter'); }
  get priceContainer() { return $('#Services'); }
  get eurCurrencyOption() { return $(`span*=${currencyLabels.eur}`); }
  get usdCurrencyOption() { return $(`span*=${currencyLabels.usd}`); }

  async openSolutionsPage() {
    await this.open(endpoints.messaging);
    await this.acceptCookiesIfVisible();
  }

  async switchCurrencyToEUR() {
    await this.clickStable(await this.currencySelect);
    await this.eurCurrencyOption.click();
  }
  
  async getPriceText() {
    return await this.priceContainer.getText();
  }

}

export default new MessagingPage();