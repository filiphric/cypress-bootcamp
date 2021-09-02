it('dynamické nahradzovanie odpovedí', () => {

  cy
    .intercept({
      method: 'GET',
      url: '/api/boards'
    }, (req) => {
      req.reply(res => {

        res.body[0].starred = true
        return res

      })
    }).as('boards')

  cy
    .visit('/')
  
});