/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/25619573353');

});

it.only('v zozname sa nachádzajú dva tasky', () => {

  cy
    .get('[data-cy="task"]')
    .should('have.length', 2);

});

it('tasky majú správne texty', () => {

  cy
    .get('[data-cy="task"]')
    .then( item => {

      expect(item).to.contain.text('chlieb');
      expect(item).to.contain.text('mlieko');

    });

});
