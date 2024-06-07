import type { StorybookConfig } from "@storybook/react-webpack5";

import custom from '../webpack.config.js';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  webpackFinal: async (config:any) => {
    
    const updatedRules = config.module.rules.filter(rule => rule.type!=='asset/resource')
    
    return {
      ...config,
      module: { ...config.module, rules: [...updatedRules, ...custom.module.rules] },
    };
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
