/// <reference types="cypress" />

beforeEach(() => {

  cy
  .visit('/board/25619573353');

});

it.only('list s názvom "kúpiť" sa nachádza v zozname', () => {

  cy
    .get('[data-cy="list-name"]')
    .should('have.value', 'kúpiť');

});

it('task s textom „rožky“ je na prvej pozícii (riešenie 1)', () => {

  cy
    .get('[data-cy="task"]')
    .first()
    .should('contain.text', 'rožky');

});

it('task s textom „mlieko“ je na poslednej pozícii (riešenie 2)', () => {

});
