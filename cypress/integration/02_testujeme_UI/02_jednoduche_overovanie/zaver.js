/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/25619573353')

})

it('vytvorenie tasku', () => {

  cy
    .contains('Add new task')
    .click();

  cy
    .get('[data-cy=task-input]')
    .type('buy milk{enter}')

  cy
    .get('[data-cy=task]')
    .should('be.visible')


})

it('overenie počtu taskov', () => {

  cy
    .contains('Add new task')
    .click();

  cy
  .get('[data-cy=task-input]')
    .type('wash dishes{enter}')

  cy
    .get('[data-cy=task]')
    .should('have.length', 2)

})

it('overenie zaškrtnutia', () => {

  cy
    .get('[data-cy=task-done]')
    .check()

  cy
    .get('[data-cy=task-title]')
    .should('have.class', 'completed')

  cy
    .get('[data-cy=task-done]')
    .should('be.checked')

})

it('overenie názvu listu', () => {

  cy
    .get('[data-cy=list-name]')
    .should('have.value', 'new list')

})


