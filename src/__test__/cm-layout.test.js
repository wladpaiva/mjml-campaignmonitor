import {registerComponent} from 'mjml-core'
import {getByText, queryByAttribute} from '@testing-library/dom'

import {getDom} from './util'
import CmLayout from '../cm-layout'
import CmRepeater from '../cm-repeater'

beforeEach(() => {
  registerComponent(CmLayout)
  registerComponent(CmRepeater)
})

test('should render a layout tag under a repeater tag', () => {
  const container = getDom(`
    <cm-repeater>
        <cm-layout label="mycustomlabel">
            <mj-text>my custom text</mj-text>
        </cm-layout>
    </cm-repeater>
      `)
  const repeater = getByText(container, (content, element) => {
    return element.tagName === 'REPEATER'
  })
  const layout = getByText(repeater, (content, element) => {
    return element.tagName === 'LAYOUT'
  })
  const text = getByText(layout, 'my custom text')
  expect(text).toBeTruthy()
})

test('should render a layout tag with label', () => {
  const container = getDom(`
      <cm-repeater>
          <cm-layout label="mycustomlabel">
              <mj-text>my custom text</mj-text>
          </cm-layout>
      </cm-repeater>
        `)
  const layout = queryByAttribute('label', container, 'mycustomlabel')
  expect(layout).toBeTruthy()
})
