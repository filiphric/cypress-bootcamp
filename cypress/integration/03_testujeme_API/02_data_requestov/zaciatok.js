/// <reference types="cypress" />

it('otvorenie vytvoreného boardu', function() {

  cy
    .request({
      method: 'POST',
      url: '/api/boards',
      body: {
        name: 'new board'
      }
    })

  cy
    .visit(`/board/1`)

});