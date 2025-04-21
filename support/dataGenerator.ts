export const generateValidEmail = () => `user_${Date.now()}@test.com`;

export const generateInvalidEmail = () => `user_${Date.now()}_invalid`;

export const generateInvalidUrl = () => `https://telnyx.com/${Date.now()}`;

export async function pickRandomTitle(elements: WebdriverIO.ElementArray): Promise<string> {
  const length = elements.length;
  const index = Math.floor(Math.random() * length);
  const el = elements[index];
  return await el.getText();
}

export function generateInvalidSearch(): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 15; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result + Date.now();
  }