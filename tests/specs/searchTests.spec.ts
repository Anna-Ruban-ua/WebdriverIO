import solutionsPage from '../pageobjects/solutionsPage.ts';
import { pickRandomTitle, generateInvalidSearch } from '../../support/dataGenerator.ts';

describe('Solutions Search', () => {
  beforeEach(async () => {
    await solutionsPage.openSolutionsPage();
  });

  it('TC09: Valid search input', async () => {
    const validTerm = await pickRandomTitle(await solutionsPage.getSearchResults());
    await solutionsPage.typeInSearch(validTerm);
    const result = await solutionsPage.getSearchResultByText(validTerm);
    await expect(result).toBeDisplayed();
});

  it('TC10: Invalid input', async () => {
    const invalidTerm = generateInvalidSearch();
    await solutionsPage.typeInSearch(invalidTerm);
    await solutionsPage.noResultsMessage.waitForDisplayed({ timeout: 5000 });
    await expect(solutionsPage.noResultsMessage).toBeDisplayed();
  });
});
