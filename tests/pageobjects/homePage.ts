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

    getSocialIconByUrl(url: string) {
        return $(`footer a[href='${url}']`);
    }

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
            await this.clickStable(await this.menuToggleButton);
        }
    }
    
    async clickHeaderLinkByUrl(itemUrl: string) {
        const link = await this.getHeaderLinkByUrl(itemUrl);
        await this.clickStable(link);
    }

    async clickDropdownItem(menuName: string, itemUrl?: string) {
        const button = this.headerMenu.$(`button*=${menuName}`);
        await this.clickStable(await button);
        await this.dropDownMenu.waitForDisplayed({ timeout: 5000 });
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
        await this.focusAndClick(input);
        await input.setValue(email);
        await this.focusAndClick(await this.submitButton);
    }

    async clickSocialIconByUrl(url: string) {
        const icon = await this.getFooterItemByUrl(url);
        await this.clickStable(icon);
    }
    
    async hoverAndCheckColor(icon: WebdriverIO.Element, expectedColor: string) {
        await icon.scrollIntoView();
        await browser.execute((_, color) => {
          const style = document.createElement('style');
          style.innerHTML = `.force-hover {color: ${color} !important;}`;
          document.head.appendChild(style);}, icon, expectedColor);
      
        await browser.execute(el => {(el as unknown as HTMLElement).classList.add('force-hover');}, icon);
        const hoveredColor = await icon.getCSSProperty('color');
        expect(hoveredColor.parsed.hex).toBe(expectedColor);
      }
}

export default new HomePage();