export const config: WebdriverIO.Config = {
    runner: 'local',
    specs: [
        './tests/specs/**/*.ts'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        browserName: process.env.BROWSER || 'chrome',
    }],
    automationProtocol: 'webdriver',
    services: ['chromedriver'],
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
};
