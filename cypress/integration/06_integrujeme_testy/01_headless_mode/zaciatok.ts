beforeEach(() => {

  cy
    .request('POST', '/reset')

});

it('vytvorenie boardu, zoznamu a tasku', () => {

  cy
    .visit('/')

  cy
    .get('[data-cy=create-board]')
    .click();

  cy
    .get('[data-cy=new-board-input]')
    .type('nový board{enter}');

  cy
    .url()
    .should('contain', '/board/')

  cy
    .get('[data-cy=add-list]')
    .click()

  cy
    .get('[data-cy=add-list-input]')
    .type('nový zoznam{enter}')

  cy
    .get('[data-cy=list]')
    .should('be.visible')

  cy
    .get('[data-cy=new-task]')
    .click()

  cy
    .get('[data-cy=task-input]')
    .type('kúpiť mlieko{enter}')

  cy
    .get('[data-cy=task]')
    .should('have.length', 1)

})