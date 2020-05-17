import Router from 'vue-router'
import main from '../components/mainPage.vue'


export default new Router({
    mode: 'history',
    routes: [
        {
            path:'/',
            name:'mainPage',
            component: main
        }
    ]
})