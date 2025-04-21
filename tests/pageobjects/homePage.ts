import BasePage from "./basePage.ts";
import { endpoints } from '../../support/endpoints.ts';
import { overviewLinkText } from "../../support/texts.ts";

class HomePage extends BasePage {
    get headerMenu () { return $("#main-menu"); }
    get menuToggleButton ()  { return $("button[aria-controls='main-menu-content']"); }
    get dropDownMenu () { return $("div[data-radix-menu-content]"); }
    get overviewLinkText() { return $(`p.c-gSgpnm=${overviewLinkText}`); }
    get footerMenu () { return $("footer a") }
    get connectWithUsForm () { return $("form[action='/sign-up']") }
    get inputConnectWithUs () { return $("form[action='/sign-up'] input#email") }
    get submitButton () { return $("form[action='/sign-up'] button") }
    get cookieBanner () { return $("#onetrust-group-container") }
    get acceptCookieButton () { return $("#onetrust-accept-btn-handler") }

    getFooterItemByUrl(itemUrl: string) {
        return $(`footer [href='${itemUrl}']`);
    }

    getHeaderLinkByUrl(itemUrl: string) {
        return $(`header [href='${itemUrl}']`);
    }
    
    async openHomePage() {
        await this.open(endpoints.home);
        await this.acceptCookiesIfVisible();
    } 

    async clickMenuToggleButton() {
        if (await this.menuToggleButton.isDisplayed()) {
            await this.menuToggleButton.click();
        }
    }
    
    async clickHeaderLinkByUrl(itemUrl: string) {
        const link = await this.getHeaderLinkByUrl(itemUrl);
        await this.clickStable(link);
    }

    async clickDropdownItem(menuName: string, itemUrl?: string) {
        const button = this.headerMenu.$(`button*=${menuName}`);
        await button.waitForClickable({ timeout: 10000 });
        await button.click();
          
        await this.dropDownMenu.waitForDisplayed();

        if (itemUrl) {
            const itemLink = this.dropDownMenu.$(`[href='${itemUrl}']`);
            await this.clickStable(await itemLink);
        }
    }

    async clickOverviewLinkText() {
        await this.overviewLinkText.scrollIntoView();
        await this.overviewLinkText.waitForDisplayed({ timeout: 3000 });
        await this.overviewLinkText.click();
    }

    async clickFooterItemByUrl(itemUrl: string) {
        const item = await this.getFooterItemByUrl(itemUrl);
        await this.clickStable(item);
    }

    async fillContactWithUsForm(email: string) {
        const input = await this.inputConnectWithUs;
        await browser.execute(el => (el as unknown as HTMLElement).scrollIntoView({ block: 'center' }), input);
        await browser.execute(el => (el as unknown as HTMLElement).focus(), input);
        await browser.execute(el => (el as unknown as HTMLElement).click(), input);
        await input.setValue(email);
        await this.submitButton.click();
    }

    async fillContactWithUsFormWithInvalidEmail(email: string) {
        const input = await this.inputConnectWithUs;
        await browser.execute(el => (el as unknown as HTMLElement).scrollIntoView({ block: 'center' }), input);
        await browser.execute(el => (el as unknown as HTMLElement).focus(), input);
        await browser.execute(el => (el as unknown as HTMLElement).click(), input);
        await input.setValue(email);
        await this.submitButton.click();
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

export default new HomePage();