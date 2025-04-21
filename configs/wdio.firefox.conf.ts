import { config as baseConfig } from '../wdio.conf.ts';

export const config: WebdriverIO.Config = {
    ...baseConfig,
    capabilities: [{
        browserName: 'firefox',
    }],
    services: ['geckodriver'],
};