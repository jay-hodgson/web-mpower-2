// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Store from './components/store'

var store = new Store();

// polyfill for smooth scrolling behavior
window.__forceSmoothScrollPolyfill__ = true;
require('smoothscroll-polyfill').polyfill();

import VueMDCAdapter from 'vue-mdc-adapter'
Vue.use(VueMDCAdapter)

Vue.config.productionTip = true
Vue.mixin( {
  beforeCreate() {
    const options = this.$options
    if ( options.store )
      this.$store = options.store
    else if ( options.parent && options.parent.$store )
      this.$store = options.parent.$store
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.step === undefined) {
    next()
  } else if (to.meta.step === store.getCurrentStep()) {
    next()
  } else {
    document.location = '/study/intro';
  }
});

const SCREENS_W_BGS = ["/study/intro", "/study/overview", "/study/retake-quiz", "/study/ineligible", "/study/done"];

router.beforeEach((to, from, next) => {
  document.documentElement.classList.toggle("consent", 
    SCREENS_W_BGS.some((segment) => { return to.path === segment }))
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
