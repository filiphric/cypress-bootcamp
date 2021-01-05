it('page action', () => {

  cy
    .visit('/')

  cy
    .component('root')
    .then(root => {
      root.showLoginModule = true
    });

  cy
    .component('Login')
    .then(login => {
      login.logSignSwitch()
    });

});