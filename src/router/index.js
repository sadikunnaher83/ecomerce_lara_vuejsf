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
import Orders from "../views/Admin/Orders.vue";
import Products from "../views/Admin/Products.vue";
import Categories from "../views/Admin/Categories.vue";
import Settings from "../views/Admin/Settings.vue";
import Users from "../views/Admin/Users.vue";



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
        meta: {
            requireAuth: true,
        }
    },
    {
        path: '/admin/users',
        name: 'admin.users',
        component: Users,
        meta: {
            requireAuth: true,
        }
    },
    {
        path: '/admin/orders',
        name: 'admin.orders',
        component: Orders,
        meta: {
            requireAuth: true,
        }
    },
    {
        path: '/admin/products',
        name: 'admin.products',
        component: Products,
        meta: {
            requireAuth: true,
        }
    },
    {
        path: '/admin/categories',
        name: 'admin.categories',
        component: Categories,
        meta: {
            requireAuth: true,
        }
    },
    {
        path: '/admin/settings',
        name: 'admin.settings',
        component: Settings,
        meta: {
            requireAuth: true,
        }
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
