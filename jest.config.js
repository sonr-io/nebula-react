module.exports = async () => ({
  bail: 3,
  clearMocks: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
  coverageThreshold: {
    global: {
      lines: 25,
    },
  },
  coverageReporters: ['json', 'lcov', 'text'],
  coverageDirectory: './coverage',
  verbose: true,
  moduleFileExtensions: ["js", "ts", "tsx"],
  preset: "ts-jest",
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.svg$": "./scripts/svgTransformer.js",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/__mocks__/CSSStub.js'
  }
});
