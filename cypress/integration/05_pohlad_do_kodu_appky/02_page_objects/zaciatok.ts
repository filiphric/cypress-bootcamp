beforeEach(() => {

  cy
    .request('POST', '/api/reset')

  cy
    .request('POST', '/api/boards', {
      name: 'novy board'
    })

  cy
    .visit('/')

});

it.only('ohviezdičkovanie boardu', () => {

  cy
    .get('[data-cy="board-item"]')
    .realHover()
    .get('[data-cy="star"]')
    .click()

});

it('otvorenie boardu', () => {


});