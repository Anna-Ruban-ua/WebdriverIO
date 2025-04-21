import homePage from "../pageobjects/homePage.ts";
import { socialLinks } from "../../support/constants.ts";

describe('Social Media Links', () => {
  beforeEach(async () => {
    await homePage.openHomePage();
  });

  it('TC01 LinkedIn link opens in new tab', async () => {
    await homePage.clickSocialIconByUrl(socialLinks.linkedin.itemUrl);
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[handles.length - 1]);
    await expect(browser).toHaveUrlContaining(new URL(socialLinks.linkedin.itemUrl).hostname);
  });

  it('TC02 Twitter link opens in new tab', async () => {
    await homePage.clickSocialIconByUrl(socialLinks.twitter.itemUrl);
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[handles.length - 1]);
    await expect(browser).toHaveUrlContaining(new URL(socialLinks.twitter.expectedUrl || socialLinks.twitter.itemUrl).hostname);
  });

  it('TC03 Facebook link opens in new tab', async () => {
    await homePage.clickSocialIconByUrl(socialLinks.facebook.itemUrl);
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[handles.length - 1]);
    await expect(browser).toHaveUrlContaining(new URL(socialLinks.facebook.itemUrl).hostname);
  });

  it('TC04 Social icons change color on hover', async () => {
    await homePage.hoverAndCheckColor(
      await homePage.getSocialIconByUrl(socialLinks.linkedin.itemUrl),
      socialLinks.linkedin.hoverColorHex
    );

    await homePage.hoverAndCheckColor(
      await homePage.getSocialIconByUrl(socialLinks.twitter.itemUrl),
      socialLinks.twitter.hoverColorHex
    );

    await homePage.hoverAndCheckColor(
      await homePage.getSocialIconByUrl(socialLinks.facebook.itemUrl),
      socialLinks.facebook.hoverColorHex
    );
  });
});

