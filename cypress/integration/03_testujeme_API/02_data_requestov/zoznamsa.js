/// <reference types="cypress" />

// úloha #1: 
// 1. vytvor si pomocou príkazu .request() nový board 
// 2. pomocou príkazu .then() si vytiahni atribúty z odpovede requestu
// 3. použi ich v príkaze .visit()
it('otvorenie boardu pomocou funkcie .then()', () => {

})

// úloha #2: 
// 1. vytvor si pomocou príkazu .request() nový board 
// 2. pomocou príkazu .then() si vytiahni atribúty z odpovede requestu
// 3. vytvor si nový list pomocou príkazu .request() a použi id vytvoreného boardu 
// 4. použi príkaz .visit() a over si, že list bol vytvorený 
it('vytvorenie nového listu pomocou funkcie .then()', () => {

})

// úloha #3:
// 1. vytvor si pomocou príkazu .request() nový board 
// 2. použi alias
// 3. pomocou príkazu .get() si alias označ
// 4. pomocou príkazu .then() si vytiahni atribúty z odpovede requestu
// 5. použi ich v príkaze .visit()
it('otvorenie boardu pomocou aliasu', () => {

})

// úloha #4: 
// 1. vytvor si pomocou príkazu .request() nový board 
// 2. použi alias
// 3. pomocou príkazu .get() si alias označ
// 4. pomocou príkazu .then() si vytiahni atribúty z odpovede requestu
// 5. vytvor si nový list pomocou príkazu .request() a použi id vytvoreného boardu z aliasu
// 6. použi príkaz .visit() a over si, že list bol vytvorený 
it('vytvorenie nového listu pomocou aliasu', () => {

})

describe('použitie kľúčoveho slova "this"', () => {

  // úloha #5: vytvor si beforeEach hook v ktorom pomocou príkazu .request() vytvoríš nový board
  // následne si ho otvor pomocou kľúčoveho slova "this"
  it('otvorenie boardu pomocou kľúčového slova "this"', function() {

  })

  // úloha #6: podobne ako v predošlej úlohe, využi vytvorený alias na vytvorenie nového boardu a over si, že list bol vytvorený
  it('vytvorenie nového listu slova "this"', function() {

  })

})

// úloha #7: využi ktorýkoľvek z predošlých prístupov a vytvor si nový board, list aj kartu
// následne si otvor detail vytvorenej karty (posledný príkaz otvorí url ako je táto: cy.visit('/board/15623471356?card=76982478907'))
it('vytvorenie novej karty', () => {

})