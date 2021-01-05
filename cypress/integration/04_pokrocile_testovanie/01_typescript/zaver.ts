const addTodo = (title: string) => {

  cy
    .get('[data-cy="create-board"]')
    .click();

  cy
    .get('[data-cy=new-board-input]')
    .type(`${title}{enter}`);

}

it('typescript', () => {

  cy
    .visit('/')

  addTodo('new board')

});