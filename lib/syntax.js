/**
 * @typedef {import('micromark-util-types').Extension} Extension
 */

import {directiveContainer} from './directive-container.js'
import {directiveLeaf} from './directive-leaf.js'
import {directiveText} from './directive-text.js'

/**
 * @returns {Extension}
 */
export function directive() {
  return {
    text: {
      [64]: directiveText
    },
    flow: {
      [64]: [directiveContainer, directiveLeaf]
    }
  }
}
