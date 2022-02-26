module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleDirectories: ['node_modules', './src'],
  rootDir: './src',
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/$1',
  },
};
