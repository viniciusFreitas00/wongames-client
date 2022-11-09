module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/styles/*'
  ],
  coveragePathIgnorePatterns: ['_app.tsx', '_document.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
