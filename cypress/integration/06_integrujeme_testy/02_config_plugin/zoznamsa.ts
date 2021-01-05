// vytvor si konfiguračný plugin, pomocou ktorého si nastavíš mobilné rozlíšenie
// výsledkom by malo byť to, že si nastavíš mobilné rozlíšenie s pomocou príkazu
// npx cypress open --env mobile=true

it('nastavenie konfigurácie', () => {

  console.log(Cypress.config('viewportHeight'))
  console.log(Cypress.config('viewportWidth'))

});