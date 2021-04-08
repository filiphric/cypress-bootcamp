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

  cy
    .get('[data-cy=task]')
    .eq(0)
    .should('contain.text', 'mlieko')

  cy
    .get('[data-cy=task]')
    .eq(1)
    .should('contain.text', 'chlieb')

});


