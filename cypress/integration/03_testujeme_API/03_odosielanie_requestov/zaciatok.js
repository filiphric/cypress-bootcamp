it('vytvorenie boardu', () => {

  cy
    .visit('/');

  cy
    .get('[data-cy=board-item]')
    .should('have.length', 1)

})