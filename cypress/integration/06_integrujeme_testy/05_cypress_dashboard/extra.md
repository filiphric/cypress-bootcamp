# Užitočné čítanie
- [link na trello dashboard](https://filiphric.sk/trello-dashboard)
- [link na dashboard pricing](https://www.cypress.io/pricing)
- [link na dashboard pre open source projekty](https://www.cypress.io/oss-plan)

Príklad konfigurácie s nahrávaním výsledkov do dashboardu:
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
          record: true
        env:
          CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}
```

Príklad konfigurácie s nahrávaním výsledkov do dashboardu a paralelným spustením:
```yml
name: Build
on: [push]
jobs:
  cypress-run:
    runs-on: ubuntu-16.04
    strategy:
      fail-fast: false
      matrix:
        containers: [1, 2, 3]
    steps:
      - name: Checkout
        uses: actions/checkout@v1
      - name: Cypress run
        uses: cypress-io/github-action@v2
        with:
          start: npm start
          record: true
          parallel: true
        env:
          CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```