beforeEach(() => {

  cy
    .visit(`/board/7748678297`)

})

it('drag and drop', () => {

  cy
    .get('[data-cy=card-list]')
    .eq(0)
    .as('todoList')

  cy
    .get('[data-cy=card-list]')
    .eq(1)
    .as('inprogressList')

  cy
    .get('[data-cy=card]')
    .drag('@inprogressList')


});