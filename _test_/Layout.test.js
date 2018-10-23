import mjml2html from 'mjml'
import { registerComponent } from 'mjml-core'
import Layout from '../src/Layout'
import Repeater from '../src/Repeater'

beforeEach(() => {
  registerComponent(Layout)
  registerComponent(Repeater)
})

describe('cm-layout', () => {
  test('should render a layout tag with label', () => {
    const html = mjml2html(
      `
      <mjml>
        <mj-body>
          <cm-repeater>
            <cm-layout label="test">
              <mj-section>
                <mj-column>
                  <mj-text>test</mj-text>
                </mj-column>
              </mj-section>
            </cm-layout>
          </cm-repeater>
        </mj-body>
      </mjml>`,
      {
        minify: true,
      },
    ).html
    expect(html)
      .toMatch(/<layout label="test">.*<\/layout>/)
  })
})
