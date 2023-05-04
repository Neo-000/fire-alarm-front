import { createRouter, createWebHistory } from "vue-router";
import { ROUTE_NAMES } from "./routeNames";

const routes = [
    {
        name:ROUTE_NAMES.Home,
        path:'/',
        component: () => import('@/views/Home')
    },
    {
        name:ROUTE_NAMES.TestUrl,
        path:'/test',
        component: () => import('@/views/TestViews')
    }

]


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;