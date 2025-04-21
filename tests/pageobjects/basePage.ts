export default class BasePage {

    get cookieBanner () { return $("#onetrust-group-container") }
    get acceptCookieButton () { return $("#onetrust-accept-btn-handler") }

    async open(path: string) {
        await browser.url(path);
    }

    async getCurrentUrl() {
        return browser.getUrl();
    }

    async getCookieByName(name: string) {
        return (await browser.getCookies([name]))[0] || null;
    }

    async clickStable(element: WebdriverIO.Element) {
        await element.waitForExist({ timeout: 10000 });
        await browser.execute(el => el.scrollIntoView({ block: 'center' }), element);
        await element.waitForDisplayed({ timeout: 10000 });
        await element.waitForClickable({ timeout: 10000 });
        await element.click();
    }

    async focusAndClick(element: WebdriverIO.Element) {
        await browser.execute(el => (el as unknown as HTMLElement).scrollIntoView({ block: 'center' }), element);
        await browser.execute(el => (el as unknown as HTMLElement).focus(), element);
        await browser.execute(el => (el as unknown as HTMLElement).click(), element);
      }

    async acceptCookiesIfVisible() {
        if (await this.cookieBanner.isDisplayed()) {
            try {
                await this.acceptCookieButton.click();
            } catch {
                await browser.execute(el => el.click(), await this.acceptCookieButton);
            }
            await this.cookieBanner.waitForDisplayed({ reverse: true, timeout: 10000 });
        }
    }

}