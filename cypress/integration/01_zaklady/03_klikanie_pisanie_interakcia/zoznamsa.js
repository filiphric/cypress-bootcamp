/// <reference types="cypress" />

// úloha #1: vytvor si nový zoznam (list) vo svojom boarde
it('vytvorenie nového zoznamu', () => {

  // ⚠️ tento cy.task príkaz naplní databázu dátami, aby boli riešenia úloh spustiteľné pre kohokoľvek, kto chce vidieť riešenia
  cy.task('setupDb', require('./data1.json'), { log: false })

  cy.visit('/board/81987167479')

  cy.get('[data-cy=add-list-input]')
    .type('nový zoznam{enter}')

});

// úloha #2: vytvor si novú kartu v zozname
it('vytvorenie novej karty', () => {

   // ⚠️ tento cy.task príkaz naplní databázu dátami, aby boli riešenia úloh spustiteľné pre kohokoľvek, kto chce vidieť riešenia
   cy.task('setupDb', require('./data2.json'), { log: false })

   cy.visit('/board/81987167479')
 
   cy.get('[data-cy=new-card]')
     .type('nová karta{enter}')

});

// úloha #3: zaškrtni kartu v zozname
it('zaškrtnutie karty', () => {

  // ⚠️ tento cy.task príkaz naplní databázu dátami, aby boli riešenia úloh spustiteľné pre kohokoľvek, kto chce vidieť riešenia
  cy.task('setupDb', require('./data3.json'), { log: false })

  cy.visit('/board/81987167479')
 
   cy.get('[data-cy=card-checkbox]')
     .check()

});

// úloha #4: odškrtni kartu v zozname
it('odškrtnutie karty', () => {

  // ⚠️ tento cy.task príkaz naplní databázu dátami, aby boli riešenia úloh spustiteľné pre kohokoľvek, kto chce vidieť riešenia
  cy.task('setupDb', require('./data3.json'), { log: false })

  cy.visit('/board/81987167479')
 
   cy.get('[data-cy=card-checkbox]')
     .uncheck()

});

// úloha #5: otvor si board a klikni na jeho názov. nájdi v dokumentácii 
// príkaz, pomocou ktorého vymažeš textové pole obsahujúce názov boardu
it('vymazanie inputu', () => {

  // ⚠️ tento cy.task príkaz naplní databázu dátami, aby boli riešenia úloh spustiteľné pre kohokoľvek, kto chce vidieť riešenia
  cy.task('setupDb', require('./data1.json'), { log: false })

  cy.visit('/board/81987167479')
 
   cy.get('[data-cy=board-title]')
     .clear()  

});

// úloha #6: podobne ako v úlohe #5, budeme pracovať s textovým poľom,
// v ktorom sa nachádza názov boardu. toto pole má dva stavy - focus a blur
// nájdi v dokumentácii príkazy, pomocou ktorých tieto dva stavy vyvoláš
it('označenie inputu na zmenu názvu boardu', () => {

  // ⚠️ tento cy.task príkaz naplní databázu dátami, aby boli riešenia úloh spustiteľné pre kohokoľvek, kto chce vidieť riešenia
  cy.task('setupDb', require('./data1.json'), { log: false })

  cy.visit('/board/81987167479')
 
  cy.get('[data-cy=board-title]')
    .focus()  
    .blur()

})