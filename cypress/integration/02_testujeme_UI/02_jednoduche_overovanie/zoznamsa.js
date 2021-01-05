/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit(); // ⚠️ doplň si adresu svojho boardu

})

// úloha #1: vytvor si nový zoznam (list) a over si, že je viditeľný
it('vytvorenie listu', () => {

})

// úloha #2: vytvor si ešte jeden zoznam (list) a over si, že sa na stránke nachádzajú dva
it('overenie počtu listov', () => {

})

// úloha #3: začni test s jedným zoznamom na stránke. odstráň ho a potom over, že sa na stránke nenachádza ani jeden
it('odstránenie listu', () => {

})

// úloha #4: začni test s jedným taskom v aplikácii, pomocou testu ho zaškrtni a over si, že je task aj naozaj zaškrtnutý
it('overenie odškrtnutia', () => {

})

// úloha #5: začni test s jedným zoznamom v aplikácii. zmeň jeho názov a následne si over, že sa názov naozaj zmenil
it('overenie názvu listu', () => {

})

// úloha #6: vytvor si nový task a over si jeho text
it('overenie textu na pridanie tasku (add new task)', () => {

})