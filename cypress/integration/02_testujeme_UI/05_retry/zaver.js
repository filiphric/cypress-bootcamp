/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/25619573353');

});

it('v zozname sa nachádzajú dve karty', () => {

  cy
    .get('[data-cy="card"]', { timeout: 30000 })
    .should('have.length', 2);

});

it.only('karty majú správne texty', () => {

  cy
    .get('[data-cy="card"]')
    .should( items => {

      expect(items[0]).to.contain.text('chlieb');
      expect(items[1]).to.contain.text('mlieko');

    });

});
