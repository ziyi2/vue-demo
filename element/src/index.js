import ElButton from '../packages/button'
import ElIcon from '../packages/icon'

const components = [
  ElIcon,
  ElButton
]

export default {
  install: (Vue, options = {}) => {
    components.map(component => {
      Vue.component(component.name, component)
    })
  }
}
