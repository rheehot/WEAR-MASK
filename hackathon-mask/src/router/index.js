import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/mainPage.vue'


export default new Router({
    routes: [
        {
            path:'/main',
            name:'mainPage',
            component: main
        }
    ]
})