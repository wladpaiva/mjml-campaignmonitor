import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  // Tell the validator which tags are allowed as our component's parent
  'mj-body': ['cm-repeater'],
  'mj-column': ['cm-repeater'],
  // Tell the validator which tags are allowed as our component's children
  'cm-repeater': [
    'mj-section',
    'mj-accordion',
    'mj-button',
    'mj-carousel',
    'mj-divider',
    'mj-html',
    'mj-image',
    'mj-raw',
    'mj-social',
    'mj-spacer',
    'mj-table',
    'mj-text',
    'mj-navbar',
    'cm-image',
    'cm-layout',
  ],
})

export default class CmRepeater extends BodyComponent {
  render() {
    return `
        <repeater>
        ${this.renderChildren(this.props.children)}
        </repeater>
      `
  }
}
