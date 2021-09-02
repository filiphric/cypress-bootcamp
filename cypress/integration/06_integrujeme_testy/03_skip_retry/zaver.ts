
describe('vynechanie testu podľa prehliadača', () => {

  it('test pustený na chrome', { browser: 'chrome' }, () => {

    cy
      .visit('/')

  });

  it('test pustený na firefoxe', { browser: 'firefox' }, () => {

    cy
      .visit('/')

  });

  it('test pustený na mobile', { viewportWidth: 300 }, () => {

    cy.skipOn(Cypress.config('viewportWidth') < 350);

  });

});

describe('nestabilný test', () => {

  beforeEach(() => {

    cy
      .request('POST', '/api/reset');

  })

  it('ID boardu musí byť párne', () => {

    cy
      .intercept('POST', '/api/boards')
      .as('board')

    cy
      .visit('/')

    cy
      .get('[data-cy="create-board"]')
      .click();

    cy
      .get('[data-cy=new-board-input]')
      .type('new board{enter}');

    cy
      .wait('@board')
      .then(({ response }) => {

        expect(response.body.id % 2 == 0).to.be.true

      })

  });

});