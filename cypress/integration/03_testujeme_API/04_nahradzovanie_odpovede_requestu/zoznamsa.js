/// <reference types="cypress" />

// úloha #1: použi súbor twoBoards.json z fixtures foldra, alebo si vytvor vlastný fixture súbor
it('zoznam dvoch boardov z fixture', () => {

  cy.intercept('/api/boards', {
    fixture: 'twoBoards',
  }).as('getBoards')

  cy
    .visit('/');

  cy.contains('[data-cy=board-item]', 'pat')
  cy.contains('[data-cy=board-item]', 'mat')

})

// úloha #2: skús tentokrát vytvoriť board, no namiesto
// použitia fixture ju skús nahradiť pomocou atribútu body
it('žiaden board v zozname', () => {

  cy.intercept('/api/boards', {
    body: [],
  }).as('getBoards')

  cy
    .visit('/');

  cy.get('[data-cy=first-board')
    .should('be.visible')

})

// úloha #3: pridaj si ďalší .intercept() atribút, pomocou ktorého vyvoláš chybu pri vytvorení zoznamu
it('chyba pri vytvorení zoznamu', () => {

  // ⚠️ tento cy.task príkaz naplní databázu dátami, aby boli riešenia úloh spustiteľné pre kohokoľvek, kto chce vidieť riešenia
  cy.task('setupDb', require('./data.json'), { log: false })

  cy.intercept('POST', '/api/lists', {
    forceNetworkError: true
  }).as('getBoards')

  cy.visit('/board/81987167479')

  cy.get('[data-cy=create-list]')
    .click()

  cy.get('[data-cy=add-list-input]')
    .type('nový zoznam{enter}')

  cy.get('[data-cy=notification-message]')
    .should('contain.text', 'List was not created')

})

// úloha #4: pridaj si ďalší .intercept() atribút, pomocou ktorého vyvoláš chybu pri vytvorení karty
it('chyba pri vytvoreni karty', () => {

  // ⚠️ tento cy.task príkaz naplní databázu dátami, aby boli riešenia úloh spustiteľné pre kohokoľvek, kto chce vidieť riešenia
  cy.task('setupDb', require('./data.json'), { log: false })

  cy.intercept('POST', '/api/cards', {
    forceNetworkError: true
  }).as('getBoards')

  cy.visit('/board/81987167479')

  cy.get('[data-cy=new-card]')
    .type('nová karta{enter}')

  cy.get('[data-cy=notification-message]')
    .should('contain.text', 'Card was not created')

})

// úloha #5: dynamicky zmeň názov niektorého boardu v zozname
it('dynamická zmena názvov boardov', () => {

  cy
    .intercept({
      method: 'GET',
      url: '/api/boards'
    }, (req) => {
      req.reply(res => {
        res.body[0].name = 'zmenený názov'
      })
    }).as('boards')

  cy
    .visit('/')

  cy.contains('[data-cy=board-item]', 'zmenený názov')

})