const cypress = require('cypress')

cypress
  .run({
    browser: 'firefox',
    headed: true,
    spec: './cypress/integration/06_integrujeme_testy/01_headless_mode/zaciatok.ts'
  }).then((results) => {
    console.log(results)
  })
  .catch((err) => {
    console.error(err)
  })