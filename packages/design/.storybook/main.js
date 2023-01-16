const path = require('path');
module.exports = {
  'stories': [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    'storybook-dark-mode',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  'core': {
    'disableTelemetry': true
  },
  'framework': {
    'name': '@storybook/vue3-vite',
    'options': {}
  },
  'docs': {
    'autodocs': 'tag'
  }
}