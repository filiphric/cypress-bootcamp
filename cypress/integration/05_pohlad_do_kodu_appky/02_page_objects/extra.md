## Užitočné čítanie
- [video o page objectoch](https://testautomationu.applitools.com/cypress-tutorial/chapter7.html)
- [blog o page objectoch vs. app actions](https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/)
- [môj blog pre Applitools o tom, ako fungujú page actions](https://applitools.com/blog/page-objects-app-actions-cypress/)

Page object vytvorený počas dema:
```ts
export class BoardList {

  star() {

    cy
      .get('[data-cy="board-item"]')
      .realHover()
      .get('[data-cy="star"]')
      .click()

    return this
  }

  open(boardName: string) {

    cy
      .contains(boardName)
      .click()

  }

}
```