/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit(); // ⚠️ doplň si adresu svojho boardu

});

it('vytvorenie zoznamu', () => {

  // úloha #1: vytvor si v teste nový zoznam v zozname a odsleduj si request, ktorý sa udeje pri jeho vytvorení.

})

it('vytvorenie karty', () => {

  // úloha #2: vytvor si v teste novú kartu v zozname a odsleduj si request, ktorý sa udeje pri jeho vytvorení.
  // pomocou príkazov .its() a .should() si otestuj status alebo telo odpovede requestu

})

it('odstránenie zoznamu', () => {

  // úloha #3: manuálne si vytvor nový zoznam a pomocou príkazov .get() a click()
  // testu tento zoznam odstráň. následne si odsleduj request, ktorý sa volá pri odstránení zoznamu
  // pri tomto teste budeš musieť využiť aj wildcard

})

it('zaškrtnutie karty', () => {

  // úloha #4: pomocou testu si zaškrtni kartu v zozname a odsleduj si request,
  // ktorý sa pri tejto akcii odpaľuje. skús si vytvoriť aj zopár testov pre tento request.
  // skús na overenie spoužiť príkaz .then() skontroluj napríklad status kód a telo requestu

})

it('odstránenie karty', () => {

  // úloha #5: odsleduj si request, ktorý sa odpaľuje pri odstránení karty

})

