// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'admin-lte/dist/css/adminlte.min.css'

import Bootstrap from 'bootstrap'
import './extlib/iCheck/icheck'
import './extlib/AdminLTE.min.css'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({ // 配置对象的属性名都是一些确定的名词，不能随意更改
  el: '#app',
  components: { App },
  template: '<App/>',
  router //是router: router的缩写
})
