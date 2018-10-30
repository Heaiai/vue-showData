import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

//导入router的时候一定要注意首字母小写，否则会报错don't match
import router from "./router.js"    
Vue.config.productionTip = false
Vue.use(VueResource)
new Vue({
  router, //将router注入到根实例
  render: h => h(App)
}).$mount('#app')
