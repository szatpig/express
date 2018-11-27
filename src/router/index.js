// Created by szatpig at 2018/11/26.
import Router from 'vue-router'
import store from '@/vuex/store'

const Home = () => import(/* webpackChunkName: "group-home" */'@/views/home');
const Author = () => import(/* webpackChunkName: "group-login" */ '@/views/author');

const Login = () => import(/* webpackChunkName: "group-login" */ '@/views/login/login');

const Account = () => import(/* webpackChunkName: "group-login" */ '@/views/user/account');

const routes = [
    {
        path: '/home',
        name: 'home',
        meta:{
            required:true
        },
        component: Home,
        children:[{
            path: 'account',
            name: 'Account',
            component: Account,
            meta:{
                title:'用户信息'
            }
        }]
    },{
        path: '/author',
        name: 'Author',
        meta:{
            title:'用户授权'
        },
        component: Author,
    },{
        path: '/login',
        name: 'Login',
        meta:{
            title:'用户登录'
        },
        component: Login,
    }
];

const router = new Router({
    routes,
    // mode: 'history'
});

router.beforeEach((to, from, next) => {
    // 配置页面标题
    if (to.meta.title) {
        //store.dispatch('changeTitle',to.meta.title);
        document.title = to.meta.title + '- express'
    }
    next();
});

export default router
