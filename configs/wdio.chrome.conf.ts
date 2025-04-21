import { config as baseConfig } from '../wdio.conf.ts';

export const config: WebdriverIO.Config = {
    ...baseConfig,
    capabilities: [{
        browserName: 'chrome',
    }],
    services: ['chromedriver'],
};