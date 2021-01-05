/// <reference types="cypress" />

it('otvorenie vytvoreného boardu', () => {

  cy
    .request({
      method: 'POST',
      url: '/api/boards',
      body: {
        name: 'new board'
      }
    })
    .then( ({body}) => {

      cy
        .visit(`/board/${body.id}`)
    })

});