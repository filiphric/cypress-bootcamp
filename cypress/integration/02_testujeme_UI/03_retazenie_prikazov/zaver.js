/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/25619573353');

});

it('v zozname je mlieko', () => {

  cy
    .contains('[data-cy=task]', 'mlieko')

  cy
    .get('[data-cy=list]')
    .eq(1)
    .contains('mlieko')

});

it('v druhom zozname je mlieko', () => {

  cy
    .get('[data-cy=list]')
    .eq(1)
    .find('[data-cy=task]')
    .eq(1)
    .should('contain.text', 'mlieko')

});