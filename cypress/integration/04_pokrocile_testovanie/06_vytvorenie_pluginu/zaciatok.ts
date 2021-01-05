beforeEach(() => {

  cy
    .request('POST', '/api/reset');

});

it('začiatok testu v žiadanom stave', () => {

  cy
    .visit('/')

});