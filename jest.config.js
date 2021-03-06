module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  snapshotSerializers: [
    'jest-serializer-vue',
  ],
  testMatch: [
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))',
    '<rootDir>/tests/unit/Home.spec.js',
  ],
  verbose: true,
  testURL: "http://localhost/",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!**/node_modules/**",
    // Example code, so excluded from testing.
    "!**/charts/*.vue",
    // Helper functions, if components work helper functions
    // must work as well.
    "!**/shared/*.js",
    // referral page
    "!**/views/pages/resetreferrer.vue",
    "!**/views/platforms/coursera/Lessons.vue",
    // Untestable js code.
    // If store.js gets used it should be tested.
    "!**/router/*.js",
    "!**/src/*.js",
  ],
  coverageReporters: ["html", "text-summary", ],
  setupTestFrameworkScriptFile: "<rootDir>/tests/setupTests.js",
  reporters: [
    "default",
    "./node_modules/jest-latex-generator",
  ],
}
