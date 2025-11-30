import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Auth/Login.vue";    
import Profile from "../views/Profile.vue";
import Home from "../views/Home.vue";
import MyAccount from "../views/dashboard/MyAccount.vue";
import WishList from "../views/dashboard/WishList.vue";
import Carts from "../views/dashboard/Carts.vue";
import { useAuth } from "../stores/auth";
import AdminLogin from "../views/Admin/AdminLogin.vue";
import AdminDashboard from "../views/Admin/AdminDashboard.vue";



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
        meta: { requireAuth: true }
    },
    {
        path: '/dashboard/wish-list',
        name: 'wish-list',
        component: WishList,
        meta: { requireAuth: true }
    },
    {
        path: '/dashboard/Carts',
        name: 'Carts',
        component: Carts,
        meta: { requireAuth: true }
    },
    {
        path: '/dashboard/my-account',
        name: 'myaccount',
        component: MyAccount,
        meta: { requireAuth: true }
    },
    {
        path: '/admin/login',
        name: 'admin.login',
        component: AdminLogin,
    },
    {
        path: '/admin/dashboard',
        name: 'admin.dashboard',
        component: AdminDashboard,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach( (to) => {
    const auth = useAuth()

    if(to.meta.requireAuth && !auth.isAuthenticated) return { name: 'login' }
} )

export default router;
