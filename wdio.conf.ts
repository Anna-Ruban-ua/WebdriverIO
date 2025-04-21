export const config: WebdriverIO.Config = {
    runner: 'local',
    specs: [
        './tests/specs/**/*.ts'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
      browserName: process.env.BROWSER || 'chrome',
      'goog:chromeOptions': {
        args: process.env.HEADLESS === 'true'
          ? ['--headless', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage']
          : [],
      },
      'moz:firefoxOptions': {
        args: process.env.HEADLESS === 'true' ? ['-headless'] : [],
      }
    }],
    automationProtocol: 'webdriver',
    services: ['chromedriver'],
    hostname: 'localhost',
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://telnyx.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 180000
    },
    onPrepare: () => {
      const fs = require('fs');
      const path = require('path');
    
      const browser = process.env.BROWSER || 'chrome';
      const headless = process.env.HEADLESS?.trim() === 'true' ? 'true' : 'false';
      const platform = process.platform;
      const nodeVersion = process.version;
    
      const content = `BROWSER=${browser}
    HEADLESS=${headless}
    PLATFORM=${platform}
    NODE_VERSION=${nodeVersion}`;
    
      const envPath = path.resolve('./allure-results');
      if (!fs.existsSync(envPath)) {
        fs.mkdirSync(envPath, { recursive: true });
      }
    
      fs.writeFileSync(path.join(envPath, 'environment.properties'), content);
    }
    
};
