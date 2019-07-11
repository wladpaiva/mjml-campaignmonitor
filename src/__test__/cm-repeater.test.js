import {registerComponent} from 'mjml-core'
import {getByText} from '@testing-library/dom'

import {getDom} from './util'
import CmRepeater from '../cm-repeater'

beforeEach(() => {
  registerComponent(CmRepeater)
})

test('should render a repeater tag', () => {
  const container = getDom(`
        <mj-section>
            <mj-column>
              <cm-repeater>
                  <mj-text>my custom text</mj-text>
              </cm-repeater>
            </mj-column>
        </mj-section>
    `)
  const repeater = getByText(container, (content, element) => {
    return element.tagName === 'REPEATER'
  })
  const text = getByText(repeater, 'my custom text')
  expect(text).toBeTruthy()
})
