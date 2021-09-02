it('chybova hláška pri vytvorení boardu', () => {

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
    .clock()

  cy
    .get('[data-cy=new-board-input]')
    .type('nova zahrada{enter}')

  cy
    .get('[data-cy="notification-message"]')
    .should('be.visible')

  cy
    .tick(4000)

  cy
    .get('[data-cy="notification-message"]')
    .should('not.exist')

})