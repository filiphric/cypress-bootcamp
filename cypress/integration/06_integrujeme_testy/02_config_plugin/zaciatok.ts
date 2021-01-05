it('nastavenie konfigurácie', () => {

  console.log(Cypress.config('baseUrl'))
  console.log(Cypress.env('version'))
  console.log(Cypress.env('api'))
  console.log(Cypress.env('redirect'))

});