/// <reference types="cypress" />

beforeEach(() => {

  // ⚠️ tento cy.task príkaz naplní databázu dátami, aby boli riešenia úloh spustiteľné pre kohokoľvek, kto chce vidieť riešenia
  cy.task('setupDb', require('./data.json'), { log: false })

})

// úloha #1: vytvor si board cez api
it('vytvorenie boardu cez api', () => {

  cy.request('POST', '/api/boards', {
    name: 'nový board'
  })

})

// úloha #2: vytvor si list cez api. venuj špeciálnu pozornosť tomu, ktoré atribúty requestu sú povinné
it('vytvorenie listu cez api', () => {

  cy.request('POST', '/api/lists', {
    name: 'nový list',
    boardId: 81987167479 // každý board musí mať board ID, v opačnom prípade api vyhodí chybu
  })

})

// úloha #3: vytvor si kartu cez api
it('vytvorenie karty cez api', () => {

  cy.request('POST', '/api/cards', {
    name: 'nová kart',
    boardId: 81987167479, // každý board musí mať board ID, v opačnom prípade api vyhodí chybu
    listId: 47584452074 // každý list musí mať list ID, v opačnom prípade api vyhodí chybu
  })

})

// úloha #4: premenuj board pomocou api
it('premenovanie boardu cez api', () => {

  cy.request('PATCH', '/api/boards/81987167479', {
    name: 'zmenený názov boardu'
  })

})

// úloha #5: vymaž board pomocou api
it('vymazanie boardu cez api', () => {

  cy.request('DELETE', '/api/boards/81987167479')

})

// úloha #6: podobne ako pri použití api nástrojov (F2), skús 
// pomocou requestz vymazať celú databázu
it('reset databázy cez api', () => {

  cy.request('POST', '/api/reset')

})

// úloha #7: skús tentokrát vymazať iba všetky boardy
it('vymazanie boardov cez api', () => {

  cy.request('DELETE', '/api/boards')

})