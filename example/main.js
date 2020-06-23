import Vue from 'vue'
import App from './App.vue'
import router from './router'
import CUI from './../packages/index'
import DemoBlock from './components/demoBlock'
import('highlight.js/styles/default.css')
import hljs from 'highlight.js'
Vue.use(CUI)
Vue.component('demo-block', DemoBlock)

Vue.config.productionTip = false

// 高亮代码
router.afterEach(() => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
  // const data = title[route.meta.lang];
  // for (let val in data) {
  //   if (new RegExp('^' + val, 'g').test(route.name)) {
  //     document.title = data[val];
  //     return;
  //   }
  // }
  // document.title = 'Element';
  // ga('send', 'event', 'PageView', route.name);
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
