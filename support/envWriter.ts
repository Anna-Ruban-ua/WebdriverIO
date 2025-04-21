import fs from 'fs';

export const writeEnvProps = () => {
  const content = `BROWSER=${process.env.BROWSER || 'chrome'}
HEADLESS=${process.env.HEADLESS || 'false'}
PLATFORM=${process.platform}
NODE_VERSION=${process.version}
`;

  fs.mkdirSync('allure-results', { recursive: true });
  fs.writeFileSync('allure-results/environment.properties', content);
};