import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const importVue = function (name) {
  return () => import(`@/doc/${name}.md`)
}

export default new Router ({
  routes: [
    {
      path: '/ElButton',
      name: 'ElButton',
      text: 'button按钮',
      component: importVue('ElButton')
    },
    {
      path: '/city',
      name: 'city',
      text: '城市选择',
      component: importVue('ElCity')
    }
  ]
})