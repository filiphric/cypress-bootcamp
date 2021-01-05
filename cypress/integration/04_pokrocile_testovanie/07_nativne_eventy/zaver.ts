it('zobrazenie hviezdičky', () => {

  cy
    .visit('/')

  cy
    .get('[data-cy="board-item"]')
    .should('have.css', 'background-color', 'rgb(2, 106, 167)')

  cy
    .get('[data-cy="board-item"]')
    .realHover()
    .get('[data-cy="star"]')
    .should('be.visible')

  cy
    .get('[data-cy="board-item"]')
    .should('have.css', 'background-color', 'rgb(5, 90, 140)')

});

it('skopírovanie id boardu', () => {

  cy
    .visit('/board/27280994580')

  cy
    .get('[data-cy="board-options"]')
    .click();

  cy
    .get('[data-cy="copy-board-properties"]')
    .realClick()
    .task('getClipboard')
    .should('deep.eq', '{\n  "created": "2021-01-19",\n  "id": 27280994580,\n  "name": "new",\n  "starred": false,\n  "user": 0,\n  "lists": [],\n  "tasks": []\n}')

});