import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/pages/Home'
import NotFound from '@/pages/404'
import Shop from '@/pages/About'


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: Shop
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        }
    ]
})