it('vytvorenie nového boardu', () => {
  
  const addBoard = (title: string) => {

    cy
      .get('[data-cy="create-board"]')
      .click();
  
    cy
      .get('[data-cy=new-board-input]')
      .type(`${title}{enter}`);
  
  }

  cy
    .visit('/')

  addBoard('new board')

});