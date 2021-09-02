it('page action', () => {

  cy
    .visit('/')

  cy
    .window()
    .then(({ store }) => {
      console.log(store());
    });

});