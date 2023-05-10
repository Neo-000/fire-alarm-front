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
            }
        ]
    },
    {
        name:'admin',
        path:'/admin',
        component: () => import('@/layout/AdminLayout')
    }

]


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;