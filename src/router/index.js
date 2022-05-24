import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import login from '@/views/login'
import shopping from '@/views/shopping'
import userinfo from '@/views/userinfo'
import homework from '@/views/homework'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: home,
        meta: {
            tabbarActiveNum: 0
        }
    }, {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
            tabbarActiveNum: 1
        }
    }, {
        path: '/shopping',
        name: 'shopping',
        component: shopping,
        meta: {
            tabbarActiveNum: 2
        }
    }, {
        path: '/userinfo',
        name: 'userinfo',
        component: userinfo,
        meta: {
            tabbarActiveNum: 3
        }
    }, {
        path: '/homework',
        name: 'homework',
        component: homework
    }, ]
})

export default router