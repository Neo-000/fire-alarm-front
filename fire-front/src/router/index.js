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
                name:'404',
                path:'404',
                component: () => import('@/views/ErrorPage')
            },
        ]
    },
    {
        name:'admin',
        path:'/admin',
        component: () => import('@/layout/AdminLayout')
    },




    {path: '/:pathMatch(.*)*', redirect:'/404'}

]


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;