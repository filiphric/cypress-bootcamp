/// <reference types="cypress" />

// úloha #1: 
// 1. vytvor si pomocou príkazu .request() nový board 
// 2. pomocou príkazu .then() si vytiahni atribúty z odpovede requestu
// 3. použi ich v príkaze .visit()
it('otvorenie boardu pomocou funkcie .then()', () => {

  cy.request('POST', '/api/boards', {
    name: 'nový board'
  }).then( board => {

    cy.visit(`/board/${board.body.id}`)
  })

})

// úloha #2: 
// 1. vytvor si pomocou príkazu .request() nový board 
// 2. pomocou príkazu .then() si vytiahni atribúty z odpovede requestu
// 3. vytvor si nový list pomocou príkazu .request() a použi id vytvoreného boardu 
// 4. použi príkaz .visit() a over si, že list bol vytvorený 
it('vytvorenie nového listu pomocou funkcie .then()', () => {

  cy.request('POST', '/api/boards', {
    name: 'nový board'
  }).then( board => {

    cy.request('POST', '/api/lists', {
      name: 'nový list', 
      boardId: board.body.id
    })

    cy.visit(`/board/${board.body.id}`)

    cy.get('[data-cy=list-name]')
      .should('have.value', 'nový list')
  })

})

// úloha #3:
// 1. vytvor si pomocou príkazu .request() nový board 
// 2. použi alias
// 3. pomocou príkazu .get() si alias označ
// 4. pomocou príkazu .then() si vytiahni atribúty z odpovede requestu
// 5. použi ich v príkaze .visit()
it('otvorenie boardu pomocou aliasu', () => {

  cy.request('POST', '/api/boards', {
    name: 'nový board'
  }).as('board')
  
  cy.get('@board')
    .its('body')
    .then( ({ id }) => { // tuto používam deštruktúrovanie, odporúča prečítať si https://filiphric.com/using-destructuring-in-cypress

      cy.visit(`/board/${id}`)

  })

})

// úloha #4: 
// 1. vytvor si pomocou príkazu .request() nový board 
// 2. použi alias
// 3. pomocou príkazu .get() si alias označ
// 4. pomocou príkazu .then() si vytiahni atribúty z odpovede requestu
// 5. vytvor si nový list pomocou príkazu .request() a použi id vytvoreného boardu z aliasu
// 6. použi príkaz .visit() a over si, že list bol vytvorený 
it('vytvorenie nového listu pomocou aliasu', () => {

  cy.request('POST', '/api/boards', {
    name: 'nový board'
  }).as('board')
  
  cy.get('@board')
    .its('body')
    .then( ({ id }) => { // tuto používam deštruktúrovanie, odporúča prečítať si https://filiphric.com/using-destructuring-in-cypress

      cy.request('POST', '/api/lists', {
        name: 'nový list', 
        boardId: id
      })

      cy.visit(`/board/${id}`)

      cy.get('[data-cy=list-name]')
        .should('have.value', 'nový list')

  })

})

describe('použitie kľúčoveho slova "this"', () => {

  beforeEach(() => {

    cy.request('POST', '/api/boards', {
      name: 'nový board'
    }).its('body.id').as('boardId')

  })

  // úloha #5: vytvor si beforeEach hook v ktorom pomocou príkazu .request() vytvoríš nový board
  // následne si ho otvor pomocou kľúčoveho slova "this"
  it('otvorenie boardu pomocou kľúčového slova "this"', function() {

    cy.visit(`/board/${this.boardId}`)

  })

  // úloha #6: podobne ako v predošlej úlohe, využi vytvorený alias na vytvorenie nového boardu a over si, že list bol vytvorený
  it('vytvorenie nového listu slova "this"', function() {

    cy.request('POST', '/api/lists', {
      name: 'nový list', 
      boardId: this.boardId
    })

    cy.visit(`/board/${this.boardId}`)

    cy.get('[data-cy=list-name]')
      .should('have.value', 'nový list')

  })

})

// úloha #7: využi ktorýkoľvek z predošlých prístupov a vytvor si nový board, list aj kartu
// následne si otvor detail vytvorenej karty (posledný príkaz otvorí url ako je táto: cy.visit('/board/15623471356?card=76982478907'))
it('vytvorenie novej karty', () => {

  cy.request('POST', '/api/boards', {
    name: 'nový board'
  }).as('board')

  cy.get('@board')
    .its('body')
    .then( ({id}) => {

      cy.request('POST', '/api/lists', {
        boardId: id,
        name: 'nový list'
      }).as('list')

    })

  cy.get('@list')
    .then( ({ body }) => {

      cy.request('POST', '/api/cards', {
        listId: body.id,
        boardId: body.boardId,
        name: 'nová karta'
      })

    })

  cy.get('@board')
    .its('body')
    .then( ({ id }) => {

      cy.visit(`/board/${id}`)

    })

})