/// <reference types="cypress" />

it('prihlásenie do aplikácie', () => {

  cy
    .request({
      method: 'POST',
      url: '/login',
      body: {
        email: "",
        password: ""
      }
    })
    .then( () => {
      
      cy
        .setCookie('trello_token', '--- token here ---')

    })


  cy
    .visit('/')

});