import {registerDependencies} from 'mjml-validator'
import {BodyComponent} from 'mjml-core'

registerDependencies({
  'cm-repeater': ['cm-layout'],
  'cm-layout': [
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
    'mj-wrapper',
    'cm-image',
  ],
})

export default class CmLayout extends BodyComponent {
  static allowedAttributes = {
    label: 'string',
  }

  render() {
    return `
        <layout
          ${this.htmlAttributes({
            label: this.getAttribute('label'),
          })}
        >
        ${this.renderChildren(this.props.children)}
        </layout>
      `
  }
}
