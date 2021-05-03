/// <reference types="cypress" />

it.only('prázdny zoznam boardov', () => {

  cy
    .intercept('GET', '/api/boards')
    .as('boardList')

  cy
    .visit('/');

})

it('chybova hláška pri vytvorení boardu', () => {

  cy
    .visit('/');

  cy
    .get('[data-cy=create-board]')
    .click()

  cy
    .get('[data-cy=new-board-input]')
    .type('nova zahrada')

  cy
    .contains('Save')
    .click()

})