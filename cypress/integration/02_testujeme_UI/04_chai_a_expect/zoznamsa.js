/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit(); // ⚠️ doplň si adresu svojho boardu

});

// ⚠️ pred spustením testov si vytvor napr. štyri karty

// úloha #1: over všetky texty kariet pomocou príkazu .then()
it('texty kariet', () => {

})

// úloha #2: zaškrtni niektoré karty a pomocou príkazu .then a funkcie expect() over ich zaškrtnutie
it('zaškrtnutie kariet', () => {

});

// úloha #3: vytvor si niekoľko listov (zoznamov) a over si ic počet pomocou funkcie .then()
it('počet zoznamov', () => {

})

// úloha #4: over si viditeľnosť zoznamov, ktoré si si vytvoril. použi na to funkciu .then()
it('viditeľnosť zoznamov', () => {
  
})

// úloha #5: over si texty všetkých zoznamov. skús na ich overenie použť javascriptovskú funkciu forEach
it('overenie textov zoznamov', () => {

})
