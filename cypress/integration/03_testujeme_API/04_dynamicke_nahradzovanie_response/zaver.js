it('dynamické nahradzovanie odpovedí', () => {

  cy
    .intercept({
      method: 'GET',
      url: '/api/boards'
    }).as('boards')

  cy
    .visit('/')
  
});