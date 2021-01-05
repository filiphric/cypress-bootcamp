/// <reference types="cypress" />

it('zoznam dvoch boardov z fixture', () => {

  cy
    .visit('/');

  // úloha #1: použi súbor twoBoards.json z fixtures foldra, alebo si vytvor vlastný fixture súbor

})

it('žiaden board v zozname', () => {

  cy
    .visit('/');

  // úloha #2: skús tentokrát vytvoriť board, no namiesto
  // použitia fixture ju skús nahradiť pomocou atribútu body

})

it('chyba pri vytvoreni tasku', () => {

  cy
    .visit('/');

  // pridaj si ďalší .intercept() atribút, pomocou ktorého vyvoláš chybu pri vytvorení tasku

})