/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/49681072063');

});

it('overenie textu prvej karty', () => {

  cy
    .get('[data-cy="card-title"]').then( item => {

      expect(item).to.have.text('mlieko');

    });

});

it('overenie textov všetkých kariet', () => {

  cy
    .get('[data-cy="card-title"]')
    .then( items => {

      expect(items[0]).to.have.text('mlieko');
      expect(items[1]).to.have.text('chlieb');

    });

});

