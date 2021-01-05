const dbState = {
  "boards": [{
    "created": "2021-01-18",
    "id": 27280994580,
    "name": "new",
    "starred": false,
    "user": 0
  }],
  "tasks": [],
  "users": [],
  "lists": []
}

it('začiatok testu v žiadanom stave', () => {

  cy
    .task('setupDb', dbState)

  cy
    .visit('/')

});