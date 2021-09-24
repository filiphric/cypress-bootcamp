/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/49681072063');

});

it.only('v zozname sa nachádzajú dve karty', () => {

  cy
    .get('[data-cy="card"]')
    .should('have.length', 2);

});

it('karty majú správne texty', () => {

  cy
    .get('[data-cy="card"]')
    .then( items => {

      expect(items[0]).to.contain.text('chlieb');
      expect(items[1]).to.contain.text('mlieko');

    });

});
