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
    .then( item => {

      expect(item).to.contain.text('chlieb');
      expect(item).to.contain.text('mlieko');

    });

});
