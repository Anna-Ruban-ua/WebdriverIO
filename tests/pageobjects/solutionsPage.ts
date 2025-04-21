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
        await this.acceptCookiesIfVisible();
    }

    async openFilterMenu() {
      await this.clickStable(await this.filterButton);
    }
    
    async checkFirstCheckbox() {
      await this.clickStable(await this.firstCheckbox);
    }
    
    async uncheckFirstCheckbox() {
      await this.clickStable(await this.firstCheckbox);
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
      await this.focusAndClick(await this.searchInput);
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