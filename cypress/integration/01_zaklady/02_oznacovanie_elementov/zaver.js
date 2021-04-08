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

it('cypress príkazy', { baseUrl: "" }, () => {

  cy
    .visit('./cypress/integration/01_zaklady/02_oznacovanie_elementov/pages/rainbow.html');

  cy
    .get('li')
    .first()

  cy
    .get('li')
    .eq(2)

  cy
    .get('.list')
    .find('.green')

  cy
    .get('.violet')
    .parent('.list')

});