/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/49681072063');

});

it.only('overenie textu prvej karty', () => {

  cy
    .get('[data-cy="card-title"]')
    .should('have.text', 'chlieb')

});

it('overenie textov všetkých kariet', () => {

  cy
    .get('[data-cy=card-title]')
    .eq(0)
    .should('have.text', 'mlieko')

  cy
    .get('[data-cy=card-title]')
    .eq(1)
    .should('have.text', 'chlieb')

});


