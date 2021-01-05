it('page action', () => {

  cy
    .visit('/')

  cy
    .window()
    .then(({ app }) => {
      console.log(app);
    });

});