/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/25619573353');

});

it('overenie textu prvého tasku', () => {

  cy
    .get('[data-cy="task"]').then( item => {

      expect(item).to.contain.text('mlieko');

    });

});

it('overenie textov všetkých taskov', () => {

  cy
    .get('[data-cy="task"]')
    .then( items => {

      expect(items[0]).to.contain.text('mlieko');
      expect(items[1]).to.contain.text('chlieb');

    });

});

