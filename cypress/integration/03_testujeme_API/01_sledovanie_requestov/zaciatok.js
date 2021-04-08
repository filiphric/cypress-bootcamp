/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/');

});

it('vytvorenie nového boardu', () => {

  cy
    .get('[data-cy=create-board]')
    .click()

  cy
    .get('[data-cy=new-board-input]')
    .type('nova zahrada')

  cy
    .contains('Save')
    .click()

});