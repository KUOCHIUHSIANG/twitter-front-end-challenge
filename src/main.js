import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from "vue-toastification";
import VueSocketIO from 'vue-socket.io';
import "vue-toastification/dist/index.css";
import "./assets/scss/main.scss"

const options = {
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: false,
  pauseOnHover: true,
  draggable: false,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  closeButton: false,
  icon: false,
  transition: "Vue-Toastification__fade",
  maxToasts: 20,
  newestOnTop: false,
  toastClassName: "custom-toast",
  bodyClassName: ["custom-class-body"],
};

Vue.use(Toast, options);

Vue.use(new VueSocketIO({
    debug: true,
    // 服務器端地址
    connection: 'http://localhost:3000',
    // connection: 'https://twitter-chatroom-2022.herokuapp.com/',
    vuex: {
    }
}))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
