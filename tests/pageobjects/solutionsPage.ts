import { endpoints } from "../../support/endpoints.ts";
import { solutionsTexts } from "../../support/texts.ts";
import BasePage from "./basePage.ts";

class SolutionsPage extends BasePage {
    get filterButton() { return $(`button*=${solutionsTexts.filterButton}`); }
    get filterMenu() { return $('[role="menu"]'); }
    get menuItemCheckboxes() { return $$('[role="menuitemcheckbox"]'); }
    get checkboxSelector() { return $('input[type="checkbox"]'); }
    get labelSelector() { return $('span'); }
    get searchInput() { return $('#search'); }
    get searchResultTitles() { return $$('h3.c-PJLV.c-rMlRu.c-PJLV-cHtIMp-dark-false'); }
    get noResultsMessage() { return $(`//*[contains(text(), "${solutionsTexts.noResults}")]`); }
    get firstCheckbox() { return $('[role="menuitemcheckbox"] input[type="checkbox"]'); }
    get firstCheckboxLabel() { return $('[role="menuitemcheckbox"] span'); }


    async openSolutionsPage() {
        await this.open(endpoints.solutions);
    }

    async openFilterMenu() {
        await this.filterButton.waitForClickable({ timeout: 5000 });
        await browser.execute(el => (el as unknown as HTMLElement).scrollIntoView({ block: 'center' }), await this.filterButton);
        await this.filterButton.click();
      }
      
      async checkFirstCheckbox() {
        const checkbox = await this.firstCheckbox;
        await browser.execute(el => (el as unknown as HTMLElement).scrollIntoView({ block: 'center' }), checkbox);
        await checkbox.click();
      }
      
      async uncheckFirstCheckbox() {
        const checkbox = await this.firstCheckbox;
        await browser.execute(el => (el as unknown as HTMLElement).scrollIntoView({ block: 'center' }), checkbox);
        await checkbox.click();
      }
      
      async isFirstCheckboxChecked(): Promise<boolean> {
        return await this.firstCheckbox.isSelected();
      }
      
      async getFirstCheckboxLabelText(): Promise<string> {
        return await this.firstCheckboxLabel.getText();
      }
      
      async getContentByLabelText(text: string) {
        return $(`//*[contains(text(), "${text}")]`);
      }
      
    
    async typeInSearch(text: string) {
        await browser.waitUntil(async () => await this.searchInput.isExisting(), {
          timeout: 10000,
          timeoutMsg: 'Search input not found in DOM'
        });
        await browser.execute(el => (el as unknown as HTMLElement).scrollIntoView({ block: 'center' }), await this.searchInput);
        await this.searchInput.waitForDisplayed({ timeout: 10000 });
        await browser.execute(el => (el as unknown as HTMLElement).focus(), await this.searchInput);
        await browser.execute(el => (el as unknown as HTMLElement).click(), await this.searchInput);
        await this.searchInput.setValue(text);
        await browser.keys('Enter');
      }      
    
    async getSearchResults() {
        return this.searchResultTitles;
    }
    
    async getSearchResultByText(text: string) {
        return $(`//h3[contains(text(), "${text}")]`);
    }
    
    async isNoResultsMessageDisplayed() {
        return await this.noResultsMessage.isDisplayed();
    }
}

export default new SolutionsPage();