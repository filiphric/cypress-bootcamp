it('page action', () => {

  cy
    .visit('/')

  cy.window().invoke('store').invoke('resetBoards')
  cy.window().invoke('store').invoke('showNotification', 'We are testing')
  cy.window().invoke('store').then( store => {
      store.activeUser.loggedIn = true;
      store.activeUser.email = 'email';
      store.boardList.all = [
        {
          "name": "Hey there!!",
          "user": 0,
          "id": 52529841410,
          "starred": false,
          "created": "2021-09-02"
      }
      ]
  })

});