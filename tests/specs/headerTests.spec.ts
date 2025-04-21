import { header } from "../../support/constants.ts";
import homePage from "../pageobjects/homePage.ts";

describe('Header Navigation Tests', () => {
    beforeEach(async () => {
        await homePage.openHomePage();
    });

    it(`TC10 Header ${header.products.menuName} menu Validation`, async () => {
        await homePage.clickMenuToggleButton();
        await homePage.clickDropdownItem(header.products.menuName, header.products.itemUrl);
        await expect(browser).toHaveUrlContaining(header.products.itemUrl);

    });

    it(`TC11 Header ${header.solutions.menuName} menu Validation`, async () => {
        await homePage.clickMenuToggleButton();
        await homePage.clickDropdownItem(header.solutions.menuName, header.solutions.itemUrl);
        await expect(browser).toHaveUrlContaining(header.solutions.itemUrl);

    });

    it(`TC12 Header ${header.pricing.menuName} menu Validation`, async () => {
        await homePage.clickMenuToggleButton();
        await homePage.clickHeaderLinkByUrl(header.pricing.itemUrl);
        await expect(browser).toHaveUrlContaining(header.pricing.itemUrl);

    });

    it(`TC13 Header ${header.whyTelnyx.menuName} menu Validation`, async () => {
        await homePage.clickMenuToggleButton();
        await homePage.clickDropdownItem(header.whyTelnyx.menuName);
        await expect(homePage.dropDownMenu).toBeDisplayed();
        await homePage.clickOverviewLinkText();
        await expect(browser).toHaveUrlContaining(header.whyTelnyx.itemUrl);

    });

    it(`TC14 Header ${header.resources.menuName} menu Validation`, async () => {
        await homePage.clickMenuToggleButton();
        await homePage.clickDropdownItem(header.resources.menuName, header.resources.itemUrl);
        await expect(browser).toHaveUrlContaining(header.resources.itemUrl);

    });

    it(`TC15 Header ${header.developers.menuName} menu Validation`, async () => {
        await homePage.clickMenuToggleButton();
        await homePage.clickDropdownItem(header.developers.menuName);
        await expect(homePage.dropDownMenu).toBeDisplayed();
    });  
});

