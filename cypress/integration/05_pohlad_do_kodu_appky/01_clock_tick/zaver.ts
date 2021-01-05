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
    .get('[data-cy=new-board-input]')
    .type('nova zahrada')

  cy
    .clock()

  cy
    .contains('Save')
    .click()

  cy
    .get('#errorMessage')
    .should('be.visible')

  cy
    .tick(4000)

  cy
    .get('#errorMessage')
    .should('not.be.visible')

})