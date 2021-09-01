/// <reference types="cypress" />

it('zobrazenie hviezdičky príkazom .trigger()', () => {

  cy
    .visit('/');

  cy
    .get('[data-cy="board-item"]')
    .trigger('mouseover')

  cy
    .get('[data-cy="star"]')
    .click();

})

it('zobrazenie hviezdičky príkazom .invoke()', () => {

  cy
    .visit('/');

  cy
    .get('[data-cy="star"]')
    .invoke('show')
    .click();

})

it.only('pridanie classy pomocou .invoke()', () => {

  cy
    .visit('/board/49681072063');

  cy
    .get('[data-cy=card-date]')
    .invoke('addClass', 'overdue')

})



