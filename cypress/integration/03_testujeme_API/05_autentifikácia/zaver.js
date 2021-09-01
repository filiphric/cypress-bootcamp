/// <reference types="cypress" />

it('prihlásenie do aplikácie', () => {

  cy
    .request({
      method: 'POST',
      url: '/api/login',
      body: {
        email: "",
        password: ""
      }
    })
    .then( ({ body }) => {
      
      cy
        .setCookie('trello_token', body.accessToken)

    })


  cy
    .visit('/')

});