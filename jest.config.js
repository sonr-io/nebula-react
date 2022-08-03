module.exports = async () => ({
  bail: 3,
  clearMocks: true,
  testPathIgnorePatterns: [
    "<rootDir>/dist",
    "<rootDir>/coverage",
    "<rootDir>/node_modules",
    "<rootDir>/src/components/Icons",
  ],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}",
    "!<rootDir>/src/index.ts",
    "!<rootDir>/src/components/Icons/**/*.{ts,tsx}",
  ],
  coverageThreshold: {
    global: {
      lines: 50,
    },
  },
  coverageReporters: ["json", "lcov", "text"],
  coverageDirectory: "./coverage",
  verbose: true,
  moduleFileExtensions: ["js", "ts", "tsx"],
  preset: "ts-jest",
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "\\.svg$": "./scripts/svgTransformer.js",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!@sonr-io)"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^.+\\.(css|less)$": "<rootDir>/__mocks__/CSSStub.js",
  },
});
