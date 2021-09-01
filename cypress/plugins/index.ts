const { setupDb } = require('./setupDb.js')

module.exports = (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {

  on('task', {
    setupDb: setupDb
  })

  require('@cypress/code-coverage/task')(on, config)

  return config

}
