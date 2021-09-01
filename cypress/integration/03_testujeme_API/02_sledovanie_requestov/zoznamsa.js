/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit(); // ⚠️ doplň si adresu svojho boardu

});

it('vytvorenie karty', () => {

  // úloha #1: vytvor si v teste novú kartu v zozname a odsleduj si request, ktorý sa udeje pri jeho vytvorení.
  // pomocou príkazov .its() a .should() si otestuj status alebo telo odpovede requestu

})

it('odstránenie zoznamu', () => {

  // úloha #2: manuálne si vytvor nový zoznam a pomocou príkazov .get() a click()
  // testu tento zoznam odstráň. následne si odsleduj request, ktorý sa volá pri odstránení zoznamu

})

it('zaškrtnutie karty', () => {

  // úloha #3: pomocou testu si zaškrtni kartu v zozname a odsleduj si request,
  // ktorý sa pri tejto akcii odpaľuje. skús si vytvoriť aj zopár testov pre tento request.
  // skús na overenie spoužiť príkaz .then() skontroluj napríklad status kód a telo requestu

})