it('cypress config', () => {

  console.log(Cypress.config('defaultCommandTimeout'))
  console.log(Cypress.config())

});

it('cypress env', () => {

  Cypress.env('hello', 'world')

  console.log(Cypress.env())

});

it('nastavenie baseUrl v teste', { baseUrl: 'https://cypress.io' }, () => {

  cy
    .visit('/')

});

it('nastavenie env premennej v teste', { env: { item: 'hello world 👋' } }, () => {

  console.log(Cypress.env('item'))

});