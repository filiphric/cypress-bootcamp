import { store } from "trelloapp/src/stores/store";

// úloha #1: skús si pomocou app action otvoriť api nástroje
it('otvorenie api nástrojov', () => {

  cy
    .visit('/')

  cy.window().invoke('store').then( store => {
    store.showTools = true;
  })

});