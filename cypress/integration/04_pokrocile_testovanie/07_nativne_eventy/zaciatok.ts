it.only('zobrazenie hviezdičky', () => {

  cy
    .visit('/')

  cy
    .get('[data-cy="board-item"]')
    .trigger('mouseover')
    .get('[data-cy="star"]')
    .should('be.visible')

});

it('skopírovanie id boardu', () => {

  cy
    .visit('/board/27280994580')

  cy
    .get('[data-cy="board-options"]')
    .click();

  cy
    .get('[data-cy="copy-board-properties"]')
    .click()

});