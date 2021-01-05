/// <reference types="cypress" />

// Cypress.Cookies.defaults({
//   preserve: ['cookie']
// });

beforeEach(() => {

  Cypress.Cookies.preserveOnce('cookie')

});

it('nastavenie cookies', { baseUrl: "" }, () => {

  cy
    .setCookie('cookie', 'chocolate')

  cy
    .visit('./cypress/integration/04_pokrocile_testovanie/03_cookies/pages/cookies.html');

});

it('otestovanie cookies #1', { baseUrl: "" }, () => {

  cy
    .visit('./cypress/integration/04_pokrocile_testovanie/03_cookies/pages/cookies.html');

  cy
    .getCookie('cookie')
    .its('value')
    .should('eq', 'chocolate')

})

it('otestovanie cookies #2', { baseUrl: "" }, () => {

  cy
    .visit('./cypress/integration/04_pokrocile_testovanie/03_cookies/pages/cookies.html');

  cy
    .getCookie('cookie')
    .its('value')
    .should('eq', 'chocolate')

})