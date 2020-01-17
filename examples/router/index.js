import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'actionSheet',
      component: r => require.ensure([], () => r(require('../components/actionSheet.vue')))
    },
    {
      path: '/button',
      name: 'button',
      component: r => require.ensure([], () => r(require('../components/button.vue')))
    }
  ]
})
