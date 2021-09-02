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
    .should( item => {

      expect(item).to.contain.text('chlieb');
      expect(item).to.contain.text('mlieko');

    });

});
