// úloha #1: skús si pomocou custom príkazu .component() zavolať funkciu .toggleTools()
// ktorá otvorí naše api nástroje
it('otvorenie api nástrojov', () => {

  cy
    .visit('/')

  cy
    .component('root')

});