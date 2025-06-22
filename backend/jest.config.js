module.exports = {
  testEnvironment: 'node',
  coverageDirectory: './coverage',
  collectCoverage: true,
  collectCoverageFrom: ['routes/**/*.js', 'models/**/*.js', 'config/**/*.js', 'server.js'],
};