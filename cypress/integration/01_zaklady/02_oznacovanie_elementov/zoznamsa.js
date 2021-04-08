/// <reference types="cypress" />

// ⚠️ jednotlivé testy si môžeš vyfiltrovať tak, že prepíšeš "it" na "it.only"
// úloha #1: označ štvorec pomocou classy, kruh pomocou idčka, trojuholník pomocou atribútu a nadpis pomocou textu
it('class, id, attr', { baseUrl: "" }, () => {

  cy
    .visit('./cypress/integration/01_zaklady/02_oznacovanie_elementov/pages/shapes.html');

})

/*
  úloha #2: na stránke sa nachádza dúha. pozri do dokumentácie docs.cypress.io a označ
  elementy na stránke podľa inštrukcii. Tvojou úlohou bude doplniť správny príkaz
  za príkaz .get(), teda napr.:

  cy
    .get('li')
    .first()

  a podobne.
*/
it('advanced selecting', { baseUrl: "" }, () => {

  cy
    .visit('./cypress/integration/01_zaklady/02_oznacovanie_elementov/pages/rainbow.html');

  // #1 označ prvý element pomocou príkazu .first()
  cy
    .get('li')


  // #2 označ posledný element pomocou príkazu .last()
  cy
    .get('li')

  // #3 označ žltú farbu pomocou príkazu .eq()
  cy
    .get('li')

  // #4 označ modrú farbu za pomoci príkazu .next()
  cy
    .get('.green')

  // #5 označ žltú farbu za pomoci príkazu .prev()
  cy
    .get('.green')

  // #5 označ všetky primárne farby pomocou príkazu .filter() (majú classu ".primary")
  cy
    .get('li')

  // #6 označ všetky farby okrem primárnych, pomocou príkazu .not()
  cy
    .get('li')

  // #7 označ zelenú farbu pomocou príkazu .find
  cy
    .get('.list')

  // #8 označ celý zoznam (.list) farieb pomocou príkazu .parent()
  cy
    .get('.violet')

});

/*
úloha #3: označ pomocou classy jediným .get() príkazom:
  1. iba prvý a tretí kruh
  2. iba druhý a tretí kruh
  3. iba druhý kruh
*/
it('nested classes', { baseUrl: "" }, () => {

  cy
    .visit('./cypress/integration/01_zaklady/02_oznacovanie_elementov/pages/squares.html');

})