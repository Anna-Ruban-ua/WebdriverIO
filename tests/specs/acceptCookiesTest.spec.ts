import homePage from "../pageobjects/homePage.ts";
import { COOKIE_CONSENT_NAME } from '../../support/constants.ts';

describe('Cookie Consent Banner', () => {
    beforeEach(async () => {
        await homePage.openHomePage();
    });

    it('TC05 Accept Cookies', async () => {
        expect(await homePage.getCookieByName(COOKIE_CONSENT_NAME)).toBeNull();
        await homePage.acceptCookiesIfVisible();
        await browser.refresh();
        await expect(await homePage.cookieBanner).not.toBeDisplayed();
    });
});
