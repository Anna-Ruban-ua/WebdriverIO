import { footerCompanyItems } from "../../support/constants.ts";
import homePage from "../pageobjects/homePage.ts";

describe('Navigation Tests', () => {
    beforeEach(async () => {
        await homePage.openHomePage();
    });

    it('TC01 Footer "Company" Links Validation', async () => {
        for (const { itemUrl } of footerCompanyItems) {
            await homePage.clickFooterItemByUrl(itemUrl);
            await expect(browser).toHaveUrlContaining(itemUrl);
        }
    });
});