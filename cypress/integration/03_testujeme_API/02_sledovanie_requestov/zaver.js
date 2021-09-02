/// <reference types="cypress" />

it('prázdny zoznam boardov', () => {

  cy
    .intercept('GET', '/api/boards')
    .as('boardList')

  cy
    .visit('/');

  cy
    .wait('@boardList')
    .its('response.status')
    .should('eq', 200)

  cy
    .get('[data-cy=board-item]')
    .should('not.exist')

})

it('vytvorenie nového boardu', () => {

  cy
    .intercept('POST', '/api/boards')
    .as('createBoard')
    .intercept('GET', '/api/lists?boardId=*')
    .as('boardLists')

  cy
    .visit('/');

  cy
    .get('[data-cy=create-board]')
    .click()

  cy
    .get('[data-cy=new-board-input]')
    .type('nova zahrada{enter}')

  cy
    .wait('@createBoard').then( board => {

      expect(board.request.body.name).to.eq('nova zahrada')
      expect(board.response.statusCode).to.eq(201)
      expect(board.response.body.name).to.eq('nova zahrada')
      expect(board.response.body.starred).to.be.false;
      assert.isString(board.response.body.created)
      assert.isNumber(board.response.body.id)

    })

  cy
    .wait('@boardLists')

});