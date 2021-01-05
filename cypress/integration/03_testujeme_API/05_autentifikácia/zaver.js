/// <reference types="cypress" />

it('prihlásenie do aplikácie', () => {

  cy
    .setCookie('trello_token', '--- token here ---')

  cy
    .visit('/')

});