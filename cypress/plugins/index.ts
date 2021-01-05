const { setupDb } = require('./setupDb.js')
const clipboardy = require('clipboardy');

module.exports = (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {

  on('task', {
    setupDb: setupDb,
    getClipboard: () => {
      const clipboard: string = clipboardy.readSync();
      return clipboard;
    },
  })

  require('@cypress/code-coverage/task')(on, config)

  return config

}
