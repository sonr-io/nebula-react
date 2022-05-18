module.exports = async () => ({
  bail: 3,
  clearMocks: true,
  collectCoverageFrom: ["**/*.{js,jsx}"],
  coverageReporters: ["json", "lcov", "text"],
  coverageDirectory: "./coverage",
  verbose: true,
  moduleFileExtensions: ["js", "ts", "tsx"],
  preset: "ts-jest",
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.svg$": "./scripts/svgTransformer.js",
  },
  testEnvironment: "jsdom",
});
