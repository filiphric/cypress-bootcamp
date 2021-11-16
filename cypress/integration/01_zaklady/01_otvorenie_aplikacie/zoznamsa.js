/// <reference types="cypress" />

it('otvorenie trello boardu', () => {

  /*

  úloha #1: vyskúšaj si otvorenie stránky pomocou príkazu .visit()

  úloha #2: vytvor si nový trello board a pomocou príkazu .visit() si otvor url tohto boardu

  úloha #3: pozri sa do baseUrl v súbore cypress.json. skús prísť na to, akým
  spôsobom môžeš tento parameter využiť. skús si za pomoci tohto parametra otvoriť domovskú stránku,
  alebo trello board z úlohy #2

  úloha #4: v našej aplikácii je možné otvoriť detail karty. vytvor si kartu, klikni na ňu a potom skús
  si pozri akú url máš v prehliadači. skús si vytvoriť test, v ktorom túto url otvoríš

  úloha #5: otvor si url z úlohy 4, ale tentokrát namiesto celej adresy použit "qs" parameter.
  popis toho ako funguje nájdeš v dokumentácii ==> https://docs.cypress.io/api/commands/visit#Add-query-paramaters

  */

  // RIEŠENIA

  // ⚠️ tento cy.task príkaz naplní databázu dátami, aby boli riešenia úloh spustiteľné pre kohokoľvek, kto chce vidieť riešenia
  cy.task('setupDb', require('./data.json'), { log: false })

  // úloha #1
  cy.visit('http://localhost:3000')

  // úloha #2
  cy.visit('http://localhost:3000/board/81987167479') // v našej aplikácii otvárame board s id 81987167479

  // úloha #3
  // za predokladu, že máme v cypress.json nastavený atribút baseUrl: "http://localhost:3000" 
  // otvorí sa nám týmto príkazom lokalita "http://localhost:3000/" lomítko v príkaze znamená, že
  // sa otvorí domovská stránka. príkaz cy.visit() sa nedá zavolať bez parametra, preto ako 
  // argument použijeme lomítko.
  cy.visit('/') 

  // úloha #4
  // tento príkaz otvorí board s id 81987167479 a zobrazí detail karty s id 81987167479
  cy.visit('http://localhost:3000/board/81987167479?card=79535962799') 

  // úloha #5
  // tento príkaz otvorí to isté ako úloha #4, ale používame iný zápis. takýto zápis je 
  // užitočný najmä ak máme viacero parametrov. namiesto dlhej url si rozpíšeme parametre
  // ako atribúty a hodnoty qs objektu
  cy.visit('http://localhost:3000/board/81987167479', {
    qs: {
      card: '79535962799'
    }
  }) 

});