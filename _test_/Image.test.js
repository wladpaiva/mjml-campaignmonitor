import mjml2html from 'mjml'
import { registerComponent } from 'mjml-core'
import Image from '../src/Image'

beforeEach(() => {
  registerComponent(Image)
})

const compileMjmlImageWith = attr =>
  mjml2html(`<mjml><mj-body><cm-image ${attr} /></mj-body></mjml>`, {
    minify: true,
  }).html

describe('cm-image', () => {
  test('should render a mjml image with editable', () => {
    const html = compileMjmlImageWith('src="http://anyurl.com"')
    expect(html).toMatch(/editable="true"/)
  })

  test('should render a mjml image without editable', () => {
    const html = compileMjmlImageWith(
      'src="http://anyurl.com" editable="false"',
    )
    expect(html).not.toMatch(/editable="true"/)
  })

  test('should render a mjml image with placeholder instead of src', () => {
    const html = compileMjmlImageWith('placeholder="true"')
    expect(html).toMatch(/src="https:\/\/via\.placeholder\.com\/\d+x\d+"/)
  })

  test('should render a mjml image with `cm_dontimportimage`', () => {
    const html = compileMjmlImageWith(
      'src="http://anyurl.com" disable-importing="true"',
    )
    expect(html).toMatch(/cm_dontimportimage/)
  })

  test('should render a mjml image with `cm_dontconvertlink`', () => {
    const html = compileMjmlImageWith(
      'src="http://anyurl.com" disable-tracking="true"',
    )
    expect(html).toMatch(/cm_dontconvertlink/)
  })
})
