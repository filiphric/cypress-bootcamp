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

it('chybová hláška pri vytvorení boardu', () => {

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

it.only('dynamické nahradzovanie odpovedí', () => {

  cy
    .intercept({
      method: 'GET',
      url: '/api/boards'
    }, (req) => {
      req.reply(res => {

        res.body[0].starred = true
        return res

      })
    }).as('boards')

  cy
    .visit('/')
  
});