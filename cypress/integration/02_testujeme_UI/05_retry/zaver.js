/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/25619573353');

});

it.only('list s názvom "kúpiť" sa nachádza v zozname', () => {

  cy
    .get('[data-cy="list-name"]', {timeout: 30000})
    .should('have.value', 'kúpiť');

});

it('task s textom „rožky“ je na poslednej pozícii (riešenie 1)', () => {

  cy
    .get('[data-cy="task"]')
    .should('have.length', 2)
    .first()
    .should('contain.text', 'rožky');

});

it('task s textom „mlieko“ je na poslednej pozícii (riešenie 2)', () => {

  cy
    .get('[data-cy="task"]')
    .should( items => {

      expect(items[0]).to.contain.text('chlieb');
      expect(items[1]).to.contain.text('mlieko');

    });

});

