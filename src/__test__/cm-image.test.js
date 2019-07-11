import {registerComponent} from 'mjml-core'
import {queryByAttribute, getByAltText} from '@testing-library/dom'

import {getDom} from './util'
import CmImage from '../cm-image'

beforeEach(() => {
  registerComponent(CmImage)
})

test('should have editable attribute', () => {
  const container = getDom('<cm-image src="http://anyurl.com />"')
  const image = queryByAttribute('editable', container, 'true')
  expect(image).toBeTruthy()
})

test('should have cm_dontimportimage attribute', () => {
  const container = getDom(
    '<cm-image src="http://anyurl.com" disable-importing="true" />"',
  )
  const image = queryByAttribute('cm_dontimportimage', container, 'true')
  expect(image).toBeTruthy()
})

test('should have cm_dontconvertlink attribute', () => {
  const container = getDom(
    '<cm-image src="http://anyurl.com" disable-tracking="true" />"',
  )
  const image = queryByAttribute('cm_dontconvertlink', container, 'true')
  expect(image).toBeTruthy()
})

test('should src attribute point to a placeholder link', () => {
  const container = getDom('<cm-image placeholder="true" alt="x-image" />"')
  const image = getByAltText(container, 'x-image')
  expect(image.src).toMatch(/^https:\/\/via\.placeholder\.com/)
})
