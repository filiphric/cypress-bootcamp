/// <reference types="cypress" />

it('class, id, attr', { baseUrl: "" }, () => {

  cy
    .visit('./cypress/integration/01_zaklady/02_oznacovanie_elementov/pages/shapes.html');

})

it('cypress príkazy', { baseUrl: "" }, () => {

  cy
    .visit('./cypress/integration/01_zaklady/02_oznacovanie_elementov/pages/rainbow.html');

  // označenie prvého elementu
  cy
    .get('li')

  // označenie elementu pomocou indexu
  cy
    .get('li')

  // hľadanie child elementu
  cy
    .get('.list')

  // hľadanie parent elementu
  cy
    .get('.violet')

});