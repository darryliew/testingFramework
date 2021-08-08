// cucumber.js
const common = [
  '--require-module ts-node/register', // Load TypeScript module
  '--require steps/**/*.ts', // Load step definitions
  '--require shared/**/*.ts', // Shared utility functions
  '--require world/**/*.ts', // Shared utility functions
].join(' ')

module.exports = {
  default: common,
}
