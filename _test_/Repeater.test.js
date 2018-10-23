import mjml2html from 'mjml'
import { registerComponent } from 'mjml-core'
import Repeater from '../src/Repeater'

beforeEach(() => {
  registerComponent(Repeater)
})

describe('cm-repeater', () => {
  test('should render a repeater tag', () => {
    const html = mjml2html(
      `
      <mjml>
        <mj-body>
          <mj-section>
            <mj-column>
              <cm-repeater>
                  <mj-text>test</mj-text>
              </cm-repeater>
            </mj-column>
          </mj-section>
        </mj-body>
      </mjml>`,
      {
        minify: true,
      },
    ).html
    expect(html).toMatch(/<repeater>.*<\/repeater>/)
  })
})
