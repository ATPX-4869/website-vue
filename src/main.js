import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// 导入 Element_ui
import ElementUI from 'element-ui'
//加载公共组件
import Components from './components/index'
// 插件 Element-ui
Vue.use(ElementUI)
Object.keys(Components).forEach((key)=>{
  var name = key.toString()
  Vue.component(name,Components[key])
})
 
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
