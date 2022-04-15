import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// import all route in /modules
const routeFiles = import.meta.globEager('@/router/modules/*')
const routeConfiguras: RouteRecordRaw[] = []

Object.keys(routeFiles).forEach(routeModule => {
    routeFiles[routeModule]?.default && routeConfiguras.push(routeFiles[routeModule]?.default)
})

// default route
const defaultRouteConfiguras = [
    {
        path: '/',
        redirect: '/device',
    },
    {
        name: 'layout-test',
        path: '/layout-test',
        component: () => import('@/views/LayoutTest.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routeConfiguras.concat(defaultRouteConfiguras),
})

export default router
