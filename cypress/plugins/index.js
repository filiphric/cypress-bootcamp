const { setupDb } = require('./setupDb.js')

module.exports = (on, config) => {

  on('task', {
    setupDb: setupDb
  })

  require('@cypress/code-coverage/task')(on, config)

  return config

}
