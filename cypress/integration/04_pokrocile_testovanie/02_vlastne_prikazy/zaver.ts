it('vytvorenie nového boardu', () => {

  cy
    .visit('/');

  cy
    .getByCy('create-board')
    .click();

  cy
    .getByCy('new-board-input')
    .type('new board{enter}');

});