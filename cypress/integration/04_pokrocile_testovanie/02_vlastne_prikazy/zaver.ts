it('vytvorenie nového boardu', () => {

  cy
    .visit('/');

  cy
    .addBoard('new board')

});