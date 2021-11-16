/// <reference types="cypress" />


beforeEach( () => {
  // ⚠️ tento cy.task príkaz naplní databázu dátami, aby boli riešenia úloh spustiteľné pre kohokoľvek, kto chce vidieť riešenia
  cy.task('setupDb', require('./data.json'), { log: false })
  cy.visit('/board/81987167479')

})

// úloha #1: pokús sa podobne ako v príklade pridať classu na element
// zobrazujúci dátum na karte. tentokrát však skús pridať classu .completed
it('vyvolanie "completed" stavu na karte', () => {

  cy.get('[data-cy=card-date]')
    .invoke('addClass', 'completed')

})

// úloha #2: pomocou príkazu .invoke() zobraz api tooly
it('zobrazenie api toolov', () => {

  cy
    .get('[data-cy=api-tools]')
    .invoke('show')

});

// úloha #3: pomocou príkazu .invoke('val', 'hodnota') je možné zmeniť
// hodnotu input fieldu. otvor si detail karty a zmeň jej názov pomocou 
// tohto príkazu. názov sa mení kliknutím na názov karty
it('zmena názvu karty #1', () => {

  cy.get('[data-cy=card]')
    .click()

  cy
    .get('[data-cy=card-detail-title]')
    .invoke('val', 'hodnota')

});

// úloha #4: v predošlom príklade sa Ti podarilo zmeniť názov karty.
// keď však kartu zavrieš, môžeš si všimnúť, že názov ostal nezmenený
// na túto zmenu, potrebuješ vyvolať zmenu na inpute. vyvolaj ju pomocou 
// príkazu .trigger('change')
it('zmena názvu karty #2', () => {

  cy.get('[data-cy=card]')
    .click()

  cy
    .get('[data-cy=card-detail-title]')
    .invoke('val', 'hodnota')
    .trigger('input')
    .trigger('change')

});