/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/25619573353');

});

it.only('v zozname je mlieko', () => {

  cy
    .contains('[data-cy=card]', 'mlieko')

});

it('v druhom zozname je mlieko', () => {

});