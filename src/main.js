import Vue from 'vue';
import App from './App';
import router from '@src/router';
import axios from '@src/utils/axios';
import store from '@src/store';
import { Cropper } from 'vue-advanced-cropper';

// bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// style
import './style/index.scss';
// layouts
import Home from '@src/layouts/home';
import Main from '@src/layouts/main';
import User from '@src/layouts/user';
import Generic from '@src/layouts/generic';
import Loading from '@src/layouts/loading';
// components
import Input from '@components/shared/Input';
// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { addIcons } from './../fontawesome';
library.add(...addIcons);
// components
Vue.component('Icon', FontAwesomeIcon);
Vue.component('Input', Input);
Vue.component('Cropper', Cropper);
// layouts
// home page
Vue.component('homeLayout', Home);
// any page without the img header
Vue.component('mainLayout', Main);
// after auth pages
Vue.component('userLayout', User);
// pages with img header
Vue.component('genericLayout', Generic);
// loading indicator
Vue.component('loadingLayout', Loading);
// axios
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
