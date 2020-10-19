import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = () => import('../pages/login')
const register = () => import('../pages/register')
const index = () => import('../pages/index')
const home = () => import('../pages/home')
const list = () => import('../pages/list')
const cart = () => import('../pages/cart')
const mine = () => import('../pages/mine')
const proDetail = () => import('../pages/proDetail')
// const addCart = () => import('../pages/addCart')
// const addDone = () => import('../pages/addDone')
const listDetail = () => import('../pages/listDetail')
// const cartDel = () => import('../pages/cartDel')

var router= new Router({
    routes: [
        {
            path:'*',
            redirect:'/login'
        },
        {
            path:'/login',
            component:login,
            name:'登录'
        },
        {
            path:'/register',
            component:register,
            name:'注册'
        },
        {
            path: '/index',
            component: index,
            // 二级路由:
            children: [
                {
                    path: 'home',
                    component: home
                },
                {
                    path: 'list',
                    component: list,
                    name: '分类'
                },
                {
                    path: 'cart',
                    component: cart,
                    name: '购物车'
                },
                {
                    path: 'mine',
                    component: mine,
                    name: '个人中心'
                },
                {
                    path: '',
                    redirect: 'home'
                }
            ]
        },
        {
            path:'/proDetail',
            component:proDetail,
            name:'商品详情'
        },
        {
            path:'/listDetail',
            component:listDetail,
            name:'?'
        }
    ]
})

router.beforeEach((to,from,next)=>{
    if(to.path==='/login'||to.path==='/register'){
        next();
        return;
    }

    var isLogin = localStorage.getItem('isLogin');// 获取到的是一个字符串类型的
    if (isLogin) { // 注意：'true'-true,空字符串-false
        next();
        return;
    }
    next('/login');
})

export default router;