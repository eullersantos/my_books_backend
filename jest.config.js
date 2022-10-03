module.exports = {
  roots: ['./src'],
  collectCoverageFrom: ['<rootDir>/src/tests/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  testRegex: '.*\\..*spec\\.ts$',
  transform: {
    '^.+\\.ts?$': ['@swc/jest'],
  },
};
