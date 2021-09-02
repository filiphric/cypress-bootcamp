/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/25619573353');

});

it('v zozname je mlieko', () => {

  cy
    .contains('[data-cy=card]', 'mlieko')

  cy
    .get('[data-cy=list]')
    .eq(1)
    .contains('mlieko')

});

it('v druhom zozname je mlieko', () => {

  cy
    .get('[data-cy=list]')
    .eq(1)
    .find('[data-cy=card]')
    .eq(1)
    .should('contain.text', 'mlieko')

});