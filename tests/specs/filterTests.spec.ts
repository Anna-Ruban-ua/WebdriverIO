import solutionsPage from "../pageobjects/solutionsPage.ts";

describe('Solutions Filter Simple Test', () => {
  it('TC08: Should apply and remove first filter', async () => {
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