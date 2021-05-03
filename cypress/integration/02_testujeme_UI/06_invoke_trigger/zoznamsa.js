/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/')


});

// úloha #1: vyskúšaj si zobraziť hviezdičku na boarde pomocou príkazu .invoke()
it('zobrazenie hviezdičky príkazom .invoke()', () => {

  cy
    .get('[data-cy="star"]')

})

// úloha #2: vyskúšaj pridať classu overDue na task v boarde
it('pridanie classy pomocou .invoke()', () => {

})

// úloha #3: pomocou príkazu .invoke() zobraz api tooly
it('zobrazenie api toolov', () => {

  cy
    .get('#tools')

});