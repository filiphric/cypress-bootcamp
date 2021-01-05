it('opens login menu', () => {

  cy
    .visit('/')

  cy
    .component('Navbar')
    .then((navbar) => {

      cy
        .spy(navbar, 'openLogin').as('loginModule')

    })

  cy
    .get('[data-cy=login-menu]')
    .click()

  cy
    .get('@loginModule')
    .should('be.called')

});