import {createRouter, createWebHistory} from 'vue-router'

// views client
import home from '../components/client/views/home.vue'
import services from '../components/client/views/services.vue'
import about from '../components/client/views/about.vue'
import reviews from '../components/client/views/reviews.vue'
import error from '../components/client/views/error.vue'
import products from '../components/client/views/products.vue'

//views admin
import AdminHome from '../components/admin/views/AdminHome.vue'
import AdminRequest from '../components/admin/views/AdminRequest.vue'
import AdminOrders from '../components/admin/views/AdminOrders.vue'

// main components
import client from '../layouts/client.vue'
import admin from '../layouts/admin.vue'

const routes = [

    {
        path:'/client',
        component:client,
        children:[
            {
                path:'home',
                component:home
                
            },
            {
                path:'services',
                component:services,
                children:[
                    {
                        path:':products',
                        component:products
                    }
                ]
                
            },
            {
                path:'about',
                component:about
                
            },
            {
                path:'reviews',
                component:reviews
                
            },
            {
                path:'error',
                component:error
            },
        ]
    },
    {
        path:'/admin',
        component:admin,
        children:[
            {
                path:'home',
                component:AdminHome
            },
            {
                path:'request',
                component:AdminRequest
            },
            {
                path:'orders',
                component:AdminOrders
            },
            {
                path:'error',
                component:error
            },
        ]

    },

    // client redirect
    {path:'/', redirect:'/client/home'},
    {path:'/client', redirect:'/client/home'},
    {path:'/services', redirect:'/client/services'},
    {path:'/about', redirect:'/client/about'},
    {path:'/reviews', redirect:'/client/reviews'},
    {path: '/client/:pathMatch(.*)*', redirect:'/client/error'},
    {path: '/client/about/:pathMatch(.*)*', redirect:'/client/error'},
    {path: '/client/services/:pathMatch(.*)*', redirect:'/client/error'},
    // admins redirect
    {path: '/admin', redirect:'/admin/home'},
    {path: '/auth', redirect:'/admin/home'},
    {path: '/admin/:pathMatch(.*)*', redirect:'/admin/error'},

    // error redirect
    {path: '/:pathMatch(.*)*', redirect:'/client/error'}

]

export default createRouter({
    history: createWebHistory('/'),
    routes
})