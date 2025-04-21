import messagingPage from "../pageobjects/messagingPage.ts";
import { currencySymbols } from "../../support/texts.ts";

describe('Currency Tests', () => {
  beforeEach(async () => {
    await messagingPage.openSolutionsPage();
    });

  it('TC10 Should switch currency to EUR and see € in prices', async () => {
    await messagingPage.switchCurrencyToEUR();
    expect(await messagingPage.getPriceText()).toContain(currencySymbols.eur);
  });
});