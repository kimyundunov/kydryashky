// plugins/bl-components.js

import Vue from 'vue'
import Menu from '~/components/Menu'

    
const components = {
  Menu
}

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})