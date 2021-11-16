/// <reference types="cypress" />

beforeEach( () => {

  // ⚠️ tento cy.task príkaz naplní databázu dátami, aby boli riešenia úloh spustiteľné pre kohokoľvek, kto chce vidieť riešenia
  cy.task('setupDb', require('./data.json'), { log: false })
  cy.visit('/board/81987167479')

});

it('vytvorenie zoznamu', () => {

  // úloha #1: vytvor si v teste nový zoznam v boarde a odsleduj si request, ktorý sa udeje pri jeho vytvorení.
  cy.intercept('POST', '/api/lists').as('createList')

  cy.get('[data-cy=create-list]')
    .click()

  cy.get('[data-cy=add-list-input]')
    .type('nový zoznam{enter}')

  cy.wait('@createList')

})

it('vytvorenie karty', () => {

  // úloha #2: vytvor si v teste novú kartu v zozname a odsleduj si request, ktorý sa udeje pri jeho vytvorení.
  // pomocou príkazov .its() a .should() si otestuj status alebo telo odpovede requestu
  cy.intercept('POST', '/api/cards').as('createCards')

  cy.get('[data-cy=new-card]')
    .type('nová karta{enter}')

  cy.wait('@createCards')

})

it('odstránenie zoznamu', () => {

  // úloha #3: manuálne si vytvor nový zoznam a pomocou príkazov .get() a click()
  // testu tento zoznam odstráň. následne si odsleduj request, ktorý sa volá pri odstránení zoznamu
  // pri tomto teste budeš musieť využiť aj wildcard
  cy.intercept('DELETE', '/api/lists/*').as('deleteList')

  cy.get('[data-cy=list-options]')
    .click()

  cy.get('[data-cy=delete-list]')
    .click()

  cy.wait('@deleteList')

})

it('zaškrtnutie karty', () => {

  // úloha #4: pomocou testu si zaškrtni kartu v zozname a odsleduj si request,
  // ktorý sa pri tejto akcii odpaľuje. skús si vytvoriť aj zopár testov pre tento request.
  // skús na overenie spoužiť príkaz .then() skontroluj napríklad status kód a telo requestu
  cy.intercept('PATCH', '/api/cards/*').as('checkCard')

  cy.get('[data-cy=new-card]')
    .type('nová karta{enter}')

  cy.get('[data-cy=card-checkbox]')
    .check()

  cy.wait('@checkCard')

})

it('odstránenie karty', () => {

  // úloha #5: odsleduj si request, ktorý sa odpaľuje pri odstránení karty
  cy.intercept('DELETE', '/api/cards/*').as('deleteCard')

  cy.get('[data-cy=new-card]')
    .type('nová karta{enter}')

  cy.get('[data-cy=card]')
    .click()

  cy.get('[data-cy=card-detail-delete]')
    .click()

  cy.wait('@deleteCard')

})

