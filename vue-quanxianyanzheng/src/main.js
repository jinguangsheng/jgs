import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import List from './components/list.vue';
import home from './components/home.vue';
import Login from './components/login.vue';
// import HelloWorld from './components/HelloWorld.vue';
Vue.use(Router);
Vue.config.productionTip = false;

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/list',
      name: 'list',
      component: List,
    },
  ],
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
// export default router;
