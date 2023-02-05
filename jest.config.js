// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.test.(ts|js)"],

  transform: {
    "\\.(ts)$": "ts-jest",
  },
};
