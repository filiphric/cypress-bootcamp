/// <reference types="cypress" />

beforeEach( () => {

  // ⚠️ tento cy.task príkaz naplní databázu dátami, aby boli riešenia úloh spustiteľné pre kohokoľvek, kto chce vidieť riešenia
  cy.task('setupDb', require('./data.json'), { log: false })

  cy.visit('/board/81987167479')

})

// úloha #1: vytvor si nový zoznam (list) a over si, že je viditeľný
it('vytvorenie listu', () => {

  cy.get('[data-cy=list]')
    .should('be.visible')

})

// úloha #2: vytvor si ešte jeden zoznam (list) a over si, že sa na stránke nachádzajú dva
it('overenie počtu listov', () => {

  cy.get('[data-cy=create-list]')
    .click()

  cy.get('[data-cy=add-list-input]')
    .type('new list{enter}')

  cy.get('[data-cy=list]')
    .should('have.length', 2)

})

// úloha #3: začni test s jedným zoznamom na stránke. odstráň ho a potom over, že sa na stránke nenachádza ani jeden
it('odstránenie listu', () => {

  cy.get('[data-cy=list-options]')
    .click()

  cy.get('[data-cy=delete-list]')
    .click()

  cy.get('[data-cy=list]')
    .should('not.exist')

})

// úloha #4: začni test s jednou kartou v zozname, pomocou testu ho zaškrtni a over si, že je karta aj naozaj zaškrtnutá
it('overenie odškrtnutia', () => {

  cy.get('[data-cy=card-checkbox]')
    .check()

  cy.get('[data-cy=card-checkbox]')
    .should('be.checked')

  cy.get('[data-cy=card-date]')
    .should('have.class', 'completed')

})

// úloha #5: začni test s jedným zoznamom v aplikácii. zmeň jeho názov a následne si over, že sa názov naozaj zmenil
it('overenie názvu listu', () => {

  cy.get('[data-cy=list-name]')
    .should('have.value', 'nový zoznam')

})

// úloha #6: vytvor si novú kartu a over si jej text
it('overenie textu pridanej karty', () => {

  cy.get('[data-cy=card-title]')
    .should('have.text', 'nová karta')

})

// úloha #7: klikni na vytvorenú kartu a over si, že sa zobrazil detail karty
it('overenie otvorenia detailu karty', () => {

  cy.get('[data-cy=card]')
    .click()

  cy.get('[data-cy=card-detail]')
    .should('be.visible')

})

// úloha #8: otvor si vytvorenú kartu a zavri ju. over si zmiznutie detailu karty
it('overenie zatvorenia detailu karty', () => {

  cy.get('[data-cy=card]')
    .click()

  cy.get('[data-cy=card-detail]')
    .should('be.visible')

  cy.get('[data-cy=cancel]')
    .click()

  cy.get('[data-cy=card-detail]')
    .should('not.exist')

})