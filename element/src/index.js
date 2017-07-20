
import ElButton from '../packages/button'

const components = [
  ElButton
]

export default {
  install: (Vue, options = {}) => {
    components.map(component => {
      Vue.component(component.name, component)
    })
  }
}
