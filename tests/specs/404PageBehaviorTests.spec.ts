import error404Page from '../pageobjects/error404Page.ts';
import homePage from '../pageobjects/homePage.ts';
import { endpoints } from '../../support/endpoints.ts';
import { error404Texts } from '../../support/texts.ts';

describe('404 Page Behavior', () => {  
  it('TC07 404 Page Behavior', async () => {
    await error404Page.openInvalidPage();
    await homePage.acceptCookiesIfVisible();

    const errorText = await error404Page.getErrorText();
    expect(errorText).toContain(error404Texts.message1);
    expect(errorText).toContain(error404Texts.message2);

    await error404Page.isBackToHomeVisible();
    await expect(error404Page.backToHomeButton).toHaveText(error404Texts.backToHome.toUpperCase());
    await error404Page.clickBackToHome();
    await expect(await error404Page.getCurrentUrl()).toContain(endpoints.home);
  });
});