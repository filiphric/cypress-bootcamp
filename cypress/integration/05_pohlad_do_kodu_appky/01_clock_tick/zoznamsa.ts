// úloha #1: v súbore ./trelloapp/assets/js/components/board.js je funkcia addList() (riadok 241)
// ktorá funguje podobne ako createNewBoard(), ktorú sme si práve ukázali. skús napísať
// podobný test ako sme si ukázali, ale pre vytvorenie listu. pomocou príkazov
// .clock() a .tick() zmeň timeout zobrazenia chybovej hlášky.

it('chybova hláška pri vytvorení listu', () => {

  cy
    .intercept('POST', '/api/lists', {
      forceNetworkError: true
    })
    .as('boardCreate')

  cy
    .visit('/'); // doplň ID boardu

})