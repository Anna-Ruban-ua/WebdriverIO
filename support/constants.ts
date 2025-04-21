import { endpoints } from '../support/endpoints.ts';

export const footerCompanyItems = [
  { footerName: "Our Network", itemUrl: endpoints.ourNetwork },
  { footerName: "Global coverage", itemUrl: endpoints.globalCoverage },
  { footerName: "Release Notes", itemUrl: endpoints.releaseNotes },
  { footerName: "Careers", itemUrl: endpoints.careers },
  { footerName: "Website Terms and Conditions", itemUrl: endpoints.terms },
  { footerName: "Terms and conditions of service", itemUrl: endpoints.termsService },
  { footerName: "Voice AI", itemUrl: endpoints.voiceAI }
];

export const COOKIE_CONSENT_NAME = 'cookie-consent';

export const header = {
  products: {
    menuName: "Products",
    itemUrl: endpoints.products,
    isDirectLink: false,
  },
  solutions: {
    menuName: "Solutions",
    itemUrl: endpoints.solutions,
    isDirectLink: false,
  },
  pricing: {
    menuName: "Pricing",
    itemUrl: endpoints.pricing,
    isDirectLink: true,
  },
  whyTelnyx: {
    menuName: "Why Telnyx",
    itemUrl: endpoints.whyTelnyx,
    isDirectLink: false,
  },
  resources: {
    menuName: "Resources",
    itemUrl: endpoints.resources,
    isDirectLink: false,
  },
  developers: {
    menuName: "Developers",
  }
};

const commonHoverColor = "#3434ef";

export const socialLinks = {
  linkedin: {
    name: "LinkedIn",
    itemUrl: "https://www.linkedin.com/company/telnyx/",
    hoverColorHex: commonHoverColor
  },
  twitter: {
    name: "Twitter",
    itemUrl: "https://twitter.com/telnyx",
    expectedUrl: "https://x.com/telnyx",
    hoverColorHex: commonHoverColor
  },
  facebook: {
    name: "Facebook",
    itemUrl: "https://www.facebook.com/Telnyx/",
    hoverColorHex: commonHoverColor
  }
};