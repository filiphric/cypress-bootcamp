/// <reference types="cypress" />

it('prihlásenie do aplikácie', () => {

  cy
    .visit('/login')

  cy
    .get('[data-cy="login-email"]')
    .type('filip@filiphric.sk');

  cy
    .get('[data-cy="login-password"]')
    .type('nbusr123');

  cy
    .get('[data-cy="login-submit"]')
    .click();

});