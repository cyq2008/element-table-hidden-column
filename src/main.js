import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import Table from "./components/table";

Vue.config.productionTip = false


Vue.component(Table.name, Table);

new Vue({
  render: h => h(App),
}).$mount('#app')
