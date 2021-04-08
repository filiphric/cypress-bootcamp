/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/25619573353');

});

it('v zozname sa nachádzajú dva tasky', () => {

  cy
    .get('[data-cy="task"]', { timeout: 30000 })
    .should('have.length', 2);

});

it.only('tasky majú správne texty', () => {

  cy
    .get('[data-cy="task"]')
    .should( item => {

      expect(item).to.contain.text('chlieb');
      expect(item).to.contain.text('mlieko');

    });

});
