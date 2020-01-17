import plateNumber from './plateNumber/index'
import yjButton from './buttton/index'
import actionSheet from './actionSheet/index'
const components = {
  yjButton,
  actionSheet
  // plateNumber
}
const install = Vue => {
  //注册全局组件
  Object.keys(components).forEach(cpt=>{Vue.component(components[cpt].name,components[cpt])})
}
export default {
  install
}