beforeEach(() => {

  cy
    .visit(`/board/27280994580`)

})

it('drag and drop', () => {

  cy
    .get('[data-cy=tasks-list]')
    .eq(0)
    .as('todoList')

  cy
    .get('[data-cy=tasks-list]')
    .eq(1)
    .as('inprogressList')

  cy
    .get('[data-cy=task]')
    .drag('@inprogressList')


});