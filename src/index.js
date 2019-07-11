import {registerComponent} from 'mjml-core'

import CmImage from './cm-image'
import CmLayout from './cm-layout'
import CmRepeater from './cm-repeater'

registerComponent(CmImage)
registerComponent(CmLayout)
registerComponent(CmRepeater)

export default {
  CmImage,
  CmLayout,
  CmRepeater,
}
