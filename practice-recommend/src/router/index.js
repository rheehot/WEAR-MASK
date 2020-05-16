import Router from 'vue-router'
import Recommend from '@/components/recommend'


export default new Router({
    routes: [
        {
            path:'/recommend',
            name:'Recommend',
            component: Recommend
        }
    ]
})