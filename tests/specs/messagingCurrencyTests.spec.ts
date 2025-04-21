import messagingPage from "../pageobjects/messagingPage.ts";
import { currencySymbols } from "../../support/texts.ts";

describe('Currency Tests', () => {
  beforeEach(async () => {
    await messagingPage.openSolutionsPage();
    });

  it('TC04 Switch currency to EUR', async () => {
    await messagingPage.switchCurrencyToEUR();
    expect(await messagingPage.getPriceText()).toContain(currencySymbols.eur);
  });
});