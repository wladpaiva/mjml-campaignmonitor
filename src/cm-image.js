import {registerDependencies} from 'mjml-validator'
import {BodyComponent} from 'mjml-core'
import min from 'lodash/min'
import widthParser from 'mjml-core/lib/helpers/widthParser'

registerDependencies({
  'mj-hero': ['cm-image'],
  'mj-column': ['cm-image'],
  'cm-image': [],
})

class CmImage extends BodyComponent {
  static allowedAttributes = {
    label: 'string',
    editable: 'string',
    alt: 'string',
    href: 'string',
    name: 'string',
    src: 'string',
    srcset: 'string',
    title: 'string',
    rel: 'string',
    align: 'enum(left,center,right)',
    border: 'string',
    'border-bottom': 'string',
    'border-left': 'string',
    'border-right': 'string',
    'border-top': 'string',
    'border-radius': 'unit(px,%){1,4}',
    'container-background-color': 'color',
    'disable-importing': 'string',
    'disable-tracking': 'string',
    'fluid-on-mobile': 'boolean',
    padding: 'unit(px,%){1,4}',
    'padding-bottom': 'unit(px,%)',
    'padding-left': 'unit(px,%)',
    'padding-right': 'unit(px,%)',
    'padding-top': 'unit(px,%)',
    placeholder: 'string',
    target: 'string',
    width: 'unit(px)',
    height: 'unit(px)',
  }

  static defaultAttributes = {
    editable: 'true',
    align: 'center',
    border: '0',
    height: 'auto',
    padding: '10px 25px',
    target: '_blank',
  }

  getStyles() {
    const width = this.getContentWidth()
    const fullWidth = this.getAttribute('full-width') === 'full-width'

    const {parsedWidth, unit} = widthParser(width)

    return {
      img: {
        border: this.getAttribute('border'),
        'border-left': this.getAttribute('left'),
        'border-right': this.getAttribute('right'),
        'border-top': this.getAttribute('top'),
        'border-bottom': this.getAttribute('bottom'),
        'border-radius': this.getAttribute('border-radius'),
        display: 'block',
        outline: 'none',
        'text-decoration': 'none',
        height: this.getAttribute('height'),
        'min-width': fullWidth ? '100%' : null,
        width: '100%',
        'max-width': fullWidth ? '100%' : null,
      },
      td: {
        width: fullWidth ? null : `${parsedWidth}${unit}`,
      },
      table: {
        'min-width': fullWidth ? '100%' : null,
        'max-width': fullWidth ? '100%' : null,
        width: fullWidth ? `${parsedWidth}${unit}` : null,
        'border-collapse': 'collapse',
        'border-spacing': '0px',
      },
    }
  }

  getContentWidth() {
    const width = this.getAttribute('width')
      ? parseInt(this.getAttribute('width'), 10)
      : Infinity

    const {box} = this.getBoxWidths()

    return min([box, width])
  }

  getHeight() {
    const height = this.getAttribute('height')
    return height && (height === 'auto' ? height : parseInt(height, 10))
  }

  getSrc() {
    const placeholder = this.getAttribute('placeholder')
    const src = this.getAttribute('src')
    if (placeholder && !src) {
      const height = this.getHeight()
      const width = this.getContentWidth()

      return `https://via.placeholder.com/${width}x${
        height === 'auto' ? Math.round((width / 4) * 3) : height
      }`
    }

    return src
  }

  renderImage() {
    const img = `
        <img
          ${this.htmlAttributes({
            label: this.getAttribute('label'),
            alt: this.getAttribute('alt'),
            height: this.getHeight(),
            src: this.getSrc(),
            srcset: this.getAttribute('srcset'),
            style: 'img',
            title: this.getAttribute('title'),
            width: this.getContentWidth(),
            editable: this.getAttribute('editable') === 'true' || null,
            cm_dontimportimage: this.getAttribute('disable-importing'),
          })}
        />
      `

    if (this.getAttribute('href')) {
      return `
          <a
            ${this.htmlAttributes({
              href: this.getAttribute('href'),
              target: this.getAttribute('target'),
              rel: this.getAttribute('rel'),
              name: this.getAttribute('name'),
              cm_dontconvertlink: this.getAttribute('disable-tracking'),
            })}
          >
            ${img}
          </a>
        `
    }

    return img
  }

  headStyle = breakpoint => `
      @media only screen and (max-width:${breakpoint}) {
        table.full-width-mobile { width: 100% !important; }
        td.full-width-mobile { width: auto !important; }
      }
    `

  render() {
    return `
        <table
          ${this.htmlAttributes({
            border: '0',
            cellpadding: '0',
            cellspacing: '0',
            role: 'presentation',
            style: 'table',
            class: this.getAttribute('fluid-on-mobile')
              ? 'full-width-mobile'
              : null,
          })}
        >
          <tbody>
            <tr>
              <td ${this.htmlAttributes({
                style: 'td',
                class: this.getAttribute('fluid-on-mobile')
                  ? 'full-width-mobile'
                  : null,
              })}>
                ${this.renderImage()}
              </td>
            </tr>
          </tbody>
        </table>
      `
  }
}

export default CmImage
