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

it('označenie tasku', () => {

  cy
    .visit('/board/3404110071');

  cy
    .get('[data-cy="task-done"]')
    .check();

});