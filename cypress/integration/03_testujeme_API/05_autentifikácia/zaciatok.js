/// <reference types="cypress" />

it('prihlásenie do aplikácie', () => {

  cy
    .visit('/')

  cy
    .get('[data-cy="login-menu"]')
    .click();

  cy
    .get('[data-cy="login-module"]')
    .should('be.visible');

  cy
    .get('[data-cy="login-email"]')
    .type('filip@filiphric.sk');

  cy
    .get('[data-cy="login-password"]')
    .type('nbusr123');

  cy
    .get('[data-cy="login"]')
    .click();

});