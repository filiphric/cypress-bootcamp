/// <reference types="cypress" />

it('class, id, attr', { baseUrl: "" }, () => {

  cy
    .visit('./cypress/integration/01_zaklady/02_oznacovanie_elementov/pages/shapes.html');

  cy
    .contains('Shapes')

  cy
    .get('h1') // označenie pomocou tagu
    .get('.square') // označenie pomocou classy
    .get('#circle') // označenie pomocou id
    .get('[data-cy="triangle"]'); // označenie pomocou attribútu

})

it('nested classes', { baseUrl: "" }, () => {

  cy
    .visit('./cypress/integration/01_zaklady/02_oznacovanie_elementov/pages/squares.html');

  cy
    .get('.green.circle'); // označ zelený kruh

  cy
    .get('.green .circle'); // označ kruh, ktorý je vo vnútri niečoho zeleného

  cy
    .get('.green > .circle'); // označ kruh, ktorý je hneď prvá vec v niečom zelenom

})