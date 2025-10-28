import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Auth/Login.vue";    
import Profile from "../views/Profile.vue";
import Home from "../views/Home.vue";
import MyAccount from "../views/dashboard/MyAccount.vue";


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
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
    {
        path: '/dashboard/my-account',
        name: 'myaccount',
        component: MyAccount,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
