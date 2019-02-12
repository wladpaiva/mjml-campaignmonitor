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
  test('should render a wrapper inside the layout  tag with label', () => {
    const html = mjml2html(
      `
      <mjml>
        <mj-body>
          <cm-repeater>
            <cm-layout label="test">
              <mj-wrapper border="1px solid #000000">
                <mj-section>
                  <mj-column>
                    <mj-image padding="0" src="https://placeholdit.imgix.net/~text?&w=350&h=150" />
                  </mj-column>
                </mj-section>
                <mj-section>
                  <mj-column>
                    <mj-text>Text</mj-text>
                  </mj-column>
                </mj-section>
              </mj-wrapper>
            </cm-layout>
          </cm-repeater>
        </mj-body>
      </mjml>`,
      {
        minify: true,
      },
    ).html
    expect(html)
      .toMatch(/<td style="border:1px solid #000000;direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">/)
  })
})
