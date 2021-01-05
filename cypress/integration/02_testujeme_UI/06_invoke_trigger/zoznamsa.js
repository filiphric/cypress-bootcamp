/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/')


});

// úloha #1: pomocou príkazu .invoke() zobraz api tooly
it('zobrazenie api toolov', () => {

  cy
    .get('#tools')

});

// úloha #2: otvor si zoznam boardov a pomocou príkazu .trigger() zobraziť input
// na zadanie názvu nového boardu. potom skús podobnú akciu urobiť pomocou príkazu
// .invoke() a porovnaj si, v čom sa akcie líšia
it('zobrazenie inputu na vytvorenie nového boardu', () => {

  cy
    .get('[data-cy=create-board]')

});