/// <reference types="cypress" />

it('class, id, attr', { baseUrl: "" }, () => {

  cy
    .visit('./cypress/integration/01_zaklady/02_oznacovanie_elementov/pages/shapes.html');

})

it('nested classes', { baseUrl: "" }, () => {

  cy
    .visit('./cypress/integration/01_zaklady/02_oznacovanie_elementov/pages/squares.html');

})