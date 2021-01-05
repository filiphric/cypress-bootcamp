it('otvorenie zoznamu boardov', () => {

  cy
    .visit('/')

  cy
    .get('[data-cy=create-board]')
    .click();

  cy
    .get('[data-cy=new-board-input]')
    .type('new board{enter}');

});