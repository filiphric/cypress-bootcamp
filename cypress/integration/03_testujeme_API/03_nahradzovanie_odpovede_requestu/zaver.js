/// <reference types="cypress" />

it('prázdny zoznam boardov', () => {

  cy
    .intercept('GET', '/api/boards', {
      fixture: 'twoBoards'
    })
    .as('boardList')

  cy
    .visit('/');

})

it.only('chybova hláška pri vytvorení boardu', () => {

  cy
    .intercept('POST', '/api/boards', {
      forceNetworkError: true
    })
    .as('boardCreate')

  cy
    .visit('/');

  cy
    .get('[data-cy=create-board]')
    .click()

  cy
    .get('[data-cy=new-board-input]')
    .type('nova zahrada{enter}')

  cy
    .get('[data-cy="notification-message"]')
    .should('be.visible')

  cy
    .get('[data-cy="notification-message"]')
    .should('not.exist')

})