/// <reference types="cypress" />

beforeEach( () => {

  // ⚠️ tento cy.task príkaz naplní databázu dátami, aby boli riešenia úloh spustiteľné pre kohokoľvek, kto chce vidieť riešenia
  cy.task('setupDb', require('./data.json'), { log: false })
  cy.visit('/board/81987167479')

});

// ⚠️ pred spustením testov si vytvor napr. štyri karty

// úloha #1: over všetky texty kariet pomocou príkazu .then()
it('texty kariet', () => {

  cy.get('[data-cy=card-title]')
    .then( card => {
      expect(card[0]).to.have.text('karta 1')
      expect(card[1]).to.have.text('karta 2')
      expect(card[2]).to.have.text('karta 3')
      expect(card[3]).to.have.text('karta 4')
    })

})

// úloha #2: zaškrtni niektoré karty a pomocou príkazu .then a funkcie expect() over ich zaškrtnutie
it('zaškrtnutie kariet', () => {

  cy.get('[data-cy=card-checkbox]')
    .then( card => {
      expect(card[1]).to.be.checked
      expect(card[3]).to.be.checked
    })

});

// úloha #3: vytvor si niekoľko listov (zoznamov) a over si ich počet pomocou funkcie .then()
it('počet zoznamov', () => {

  cy.get('[data-cy=list]')
    .then( lists => {
      expect(lists).to.have.length(2)
    })

})

// úloha #4: over si viditeľnosť zoznamov, ktoré si si vytvoril. použi na to funkciu .then()
it('viditeľnosť zoznamov', () => {

  cy.get('[data-cy=list]')
    .then( lists => {
      expect(lists[0]).to.be.visible
      expect(lists[1]).to.be.visible
    })
  
})
