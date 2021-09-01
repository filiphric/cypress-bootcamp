/// <reference types="cypress" />

it('vytvorenie nového boardu', () => {

  cy
    .visit('/');

  cy
    .get('[data-cy="create-board"]')
    .click();

  cy
    .get('[data-cy=new-board-input]')
    .type('new board{enter}');

});

it('označenie boardu hviezdičkou', () => {

  cy
    .visit('/');

  cy
    .get('[data-cy="star"]')
    .click({force: true})

});

it('zaškrtnutie karty', () => {

  cy
    .visit('/board/33255693826');

  cy
    .get('[data-cy=card-checkbox]')
    .check();

});