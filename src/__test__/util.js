import mjml2html from 'mjml'

export const getDom = props => {
  const {html} = mjml2html(
    `
  <mjml>
    <mj-body>
      ${props}
    </mj-body>
  </mjml>
  `,
    {
      minify: true,
    },
  )
  return new DOMParser().parseFromString(html, 'text/html')
}

export default {getDom}
