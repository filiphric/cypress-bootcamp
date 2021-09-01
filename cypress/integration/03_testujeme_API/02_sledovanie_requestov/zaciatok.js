/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/');

});

it('prázdny zoznam boardov', () => {

  cy
    .visit('/');

  cy
    .get('[data-cy=board-item]')
    .should('not.exist')

})

it('vytvorenie nového boardu', () => {

  cy
    .get('[data-cy=create-board]')
    .click()

  cy
    .get('[data-cy=new-board-input]')
    .type('nova zahrada{enter}')

});