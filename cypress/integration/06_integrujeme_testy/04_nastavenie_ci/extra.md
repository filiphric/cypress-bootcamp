## Užitočné čítanie
* [dokumentácia k nastaveniu jednotlivých CI služieb](https://docs.cypress.io/guides/guides/continuous-integration.html#Setting-up-CI)
* [dokumentácia ku GitHub actions](https://github.com/cypress-io/github-action)
* [nastavenie paralelného spustenia testov v GitHub actions](https://github.com/cypress-io/github-action#parallel)

Príklad jednoduchej konfigurácie pre GitHub actions:
```yml
name: Build
on: [push]
jobs:
  cypress-run:
    runs-on: ubuntu-16.04
    steps:
      - name: Checkout
        uses: actions/checkout@v1
      - name: Cypress run
        uses: cypress-io/github-action@v2
        with:
          start: npm start
```
