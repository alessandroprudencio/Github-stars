import Vue from 'vue'
import App from './App'
import router from './router'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import './assets/css/style.css' 
import store from './store/index'
import firebase from 'firebase'

Vue.config.productionTip = false

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBwkM4VCZbKjIZnAcKYck_veF95LTEqJUA",
      authDomain: "github-stars-376db.firebaseapp.com",
      databaseURL: "https://github-stars-376db.firebaseio.com",
      projectId: "github-stars-376db",
      storageBucket: "github-stars-376db.appspot.com",
      messagingSenderId: "239847900425"
    };
    firebase.initializeApp(config);

  window.firebase=firebase

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
