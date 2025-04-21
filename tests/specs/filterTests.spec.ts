import solutionsPage from "../pageobjects/solutionsPage.ts";

describe('Solutions Filter', () => {
  it('TC08: Filter works correctly', async () => {
    await solutionsPage.openSolutionsPage();
    await solutionsPage.openFilterMenu();

    const label = await solutionsPage.getFirstCheckboxLabelText();
    await solutionsPage.checkFirstCheckbox();
    expect(await solutionsPage.isFirstCheckboxChecked()).toBe(true);

    const content = await solutionsPage.getContentByLabelText(label);
    await expect(content).toBeDisplayed();

    await solutionsPage.uncheckFirstCheckbox();
    expect(await solutionsPage.isFirstCheckboxChecked()).toBe(false);
  });
});