/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(css|less|scss|sss|styl)$":
            "<rootDir>/node_modules/identity-obj-proxy",
        "^.+\\.(svg)$": "<rootDir>/__mocks__/svg.tsx",
    },
};
