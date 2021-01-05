
declare global {
  namespace Cypress {
    interface Chainable {
      component: typeof component;
    }
  }
}

/**
 * gets element using data-cy selector
 * @param input data-cy attribute value
 * @example
 * // this command
 * cy.getDataCy('header')
 * // will select this element
 * <div data-cy="header">
 * </div>
 *
 */

export const component = (name: 'root' | 'Login' | 'Navbar' | 'board' | 'board-collection'): Chainable<Element> => {

  let log = Cypress.log({
    'displayName': 'component',
    'name': name
  });

  cy
    .window({ log: false })
    .then($win => {
      const component = name === 'root' ? $win.app : $win.app.$children.find(e => e.$vnode.tag.includes(name));
      log.set({
        consoleProps: () => {
          return { component };
        }
      });
      return component;
    });

};