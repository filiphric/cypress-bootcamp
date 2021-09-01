const fs = require('fs')
const path = require('path')
const dbPath = path.resolve('./trelloapp/public/data/data.json')

const empty = {
  "boards": [],
  "cards": [],
  "users": [],
  "lists": []
}

module.exports.setupDb = (data = empty) => {

  fs.writeFileSync(dbPath, JSON.stringify(data))

  return data;

};