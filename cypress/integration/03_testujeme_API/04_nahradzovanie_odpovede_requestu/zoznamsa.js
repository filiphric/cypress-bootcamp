/// <reference types="cypress" />

// úloha #1: použi súbor twoBoards.json z fixtures foldra, alebo si vytvor vlastný fixture súbor
it('zoznam dvoch boardov z fixture', () => {

  cy
    .visit('/');

})

// úloha #2: skús tentokrát vytvoriť board, no namiesto
// použitia fixture ju skús nahradiť pomocou atribútu body
it('žiaden board v zozname', () => {

  cy
    .visit('/');

})

// úloha #3: pridaj si ďalší .intercept() atribút, pomocou ktorého vyvoláš chybu pri vytvorení zoznamu
it('chyba pri vytvorení zoznamu', () => {

  cy
    .visit('/');

})

// úloha #4: pridaj si ďalší .intercept() atribút, pomocou ktorého vyvoláš chybu pri vytvorení karty
it('chyba pri vytvoreni karty', () => {

  cy
    .visit('/');

})

// úloha #5: dynamicky zmeň názov niektorého boardu v zozname
it('dynamická zmena názvov boardov', () => {

  cy
    .intercept({
      method: 'GET',
      url: '/api/boards'
    }, (req) => {
      req.reply(res => {

      })
    }).as('boards')

  cy
    .visit('/')

})