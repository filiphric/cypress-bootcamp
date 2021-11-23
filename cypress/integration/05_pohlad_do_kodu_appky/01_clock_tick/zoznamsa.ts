// úloha #1: v súbore ./trelloapp/src/store/actions/showNotification je funkcionalita
// ktorá ovláda zobrazovanie a skrývanie notifikácie skús napísať
// podobný test ako sme si ukázali, ale pre vytvorenie zoznamu (listu). pomocou príkazov
// .clock() a .tick() zmeň timeout zobrazenia chybovej hlášky.

it('chybová hláška pri vytvorení listu', () => {

  cy
    .intercept('POST', '/api/lists', {
      forceNetworkError: true
    })
    .as('listCreate')

  cy
    .visit('/'); // doplň ID boardu

})