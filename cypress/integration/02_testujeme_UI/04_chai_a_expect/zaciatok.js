/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/25619573353');

});

it('overenie textu prvého tasku', () => {

  cy
    .get('[data-cy="task"]')
    .should('contain.text', 'chlieb')

});

it('overenie textov všetkých taskov', () => {

});


