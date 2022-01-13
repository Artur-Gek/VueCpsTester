const Vue = require ("vue");
const App = require("./src/App.vue");

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
