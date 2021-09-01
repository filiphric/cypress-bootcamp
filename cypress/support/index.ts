import '@4tw/cypress-drag-drop';
import '@cypress/code-coverage/support'
require('@cypress/skip-test/support')

import { component } from './commands/component'

Cypress.Commands.add('component', component);