import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/about',
        component: () => import('@/pages/AboutPage')
    },
    {
        path: '/contacts',
        component: () => import('@/pages/ContactsPage')
    },
    {
        path: '/clients',
        component: () => import('@/pages/ClientsPage')
    },
    {
        path: '/services',
        component: () => import('@/pages/ServicesPage')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
