/// <reference types="cypress" />

it.only('zobrazenie hviezdičky príkazom .trigger()', () => {

  cy
    .visit('/');

})

it('zobrazenie hviezdičky príkazom .invoke()', () => {

  cy
    .visit('/');

  cy
    .get('[data-cy="star"]')
    .click({force: true});

})

it('pridanie classy pomocou .invoke()', () => {

  

})




