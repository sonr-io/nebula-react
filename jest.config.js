module.exports = async () => ({
  bail: 3,
  clearMocks: true,
  collectCoverageFrom: [
    'src/**',
  ],
  // coverageThreshold: {
  //   global: {
  //     lines: 90,
  //   },
  // },
  coverageReporters: ['json', 'lcov', 'text'],
  coverageDirectory: './coverage',
  verbose: true,
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.svg$': './scripts/svgTransformer.js',
  },
  testEnvironment: 'jsdom',
});
