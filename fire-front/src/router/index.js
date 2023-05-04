import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name:'client',
        path:'/',
        component: () => import('@/layout/ClientLayout')
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