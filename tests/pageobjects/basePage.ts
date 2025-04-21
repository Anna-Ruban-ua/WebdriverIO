export default class BasePage {

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
        await element.waitForExist({ timeout: 5000 });
        await browser.execute(el => el.scrollIntoView({ block: 'center' }), element);
        await element.waitForDisplayed({ timeout: 5000 });
        await element.waitForClickable({ timeout: 5000 });
        await element.click();
    }

}