/// <reference types="cypress" />

beforeEach( () => {

  cy
    .intercept('POST', '/api/boards')
    .as('createBoard')

  cy
    .visit('/');

});

it('vytvorenie nového boardu', () => {

  cy
    .get('[data-cy=create-board]')
    .click()

  cy
    .get('[data-cy=new-board-input]')
    .type('nova zahrada')

  cy
    .contains('Save')
    .click()

  cy
    .wait('@createBoard').then( board => {

      expect(board.request.body.name).to.eq('nova zahrada')
      expect(board.response.statusCode).to.eq(201)
      expect(board.response.body.name).to.eq('nova zahrada')
      expect(board.response.body.starred).to.be.false;
      assert.isString(board.response.body.created)
      assert.isNumber(board.response.body.id)

    })

});