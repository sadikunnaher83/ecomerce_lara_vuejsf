import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Auth/Login.vue";    
import Profile from "../views/Profile.vue";


const routes = [
    {
        path: '/',
        redirect: { name: 'login' },
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
