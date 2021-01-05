/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/');

});

it.only('načítanie zoznamu boardov', () => {

  cy
    .get('[data-cy=board-item]')
    .should('have.length', 0)

});

it('otvorenie boardu', () => {

  cy
    .get('[data-cy=board-item]')
    .eq(0)
    .click();

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