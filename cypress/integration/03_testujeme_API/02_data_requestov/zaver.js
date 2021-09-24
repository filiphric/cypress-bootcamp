/// <reference types="cypress" />

beforeEach( () => {

  cy
    .request({
      method: 'POST',
      url: '/api/boards',
      body: {
        name: 'new board'
      }
    }).as('board')

})

it('otvorenie vytvoreného boardu', function() {

  cy.visit(`/board/${this.board.body.id}`)

});