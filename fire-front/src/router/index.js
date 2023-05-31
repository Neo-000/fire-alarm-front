import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name:'client',
        path:'/',
        component: () => import('@/layout/ClientLayout'),
        redirect:'/home',
        children:[
            {
                name:'Home',
                path:'home',
                component: () => import('@/views/HomePageClient')
            },
            {
                name:'About',
                path:'about_us',
                component: () => import('@/views/AboutUsPageClient')
            },
            {
                path:'services/:id',
                component: () => import('../views/Services')
            },
            {
                name:'404',
                path:'404',
                component: () => import('@/views/ErrorPage')
            }
        ]
    },
    {
        name:'admin',
        path:'/admin',
        component: () => import('@/layout/AdminLayout'),
        redirect:'/admin/bids',
        children:[
            {
                name:'bids',
                path:'bids',
                component: () => import('@/views/Admin/BidsPageAdmin')
            },
            {
                name:'catalog',
                path:'catalog',
                component: () => import('@/views/Admin/CatalogPageAdmin')
            },
            {
                name:'analitics',
                path:'analitics',
                component: () => import('@/views/Admin/AnaliticsPageAdmin')
            },
            {
                name:'orders',
                path:'orders',
                component: () => import('@/views/Admin/OrdersPageAdmin')
            },
            {
                name:'404',
                path:'404',
                component: () => import('@/views/ErrorPage')
            }
        ]
    },




    {path: '/:pathMatch(.*)*', redirect:'/404'},
    {path: '/admin/:pathMatch(.*)*', redirect:'/admin/404'}

]


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;