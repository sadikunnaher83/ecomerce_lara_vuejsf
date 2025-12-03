<template>


   <header class="bg-white border-bottom">
    <div class="container d-flex justify-content-between align-items-center py-3">
      <div class="d-flex align-items-center gap-3">
        <a class="h5 mb-0 text-decoration-none" href="admin_dashboard.html">SimpleShop Admin</a>
        <span class="muted-small">/ Dashboard</span>
      </div>
      <div class="d-flex align-items-center gap-2">
        <a class="btn btn-outline-secondary btn-sm" href="index.html" role="button">View site</a>
        <button class="btn btn-outline-danger btn-sm" @click="handleLogout" role="button">Logout</button>
      </div>
    </div>
  </header>

  <main class="admin-wrap">
    <div class="container">
      <div class="row g-4">
        <!-- Sidebar -->
        <aside class="col-lg-3 sidebar">
          <div class="card">
            <div class="card-body">
              <h6 class="mb-1">Administrator</h6>
              <p class="mb-0 muted-small">admin@example.com</p>
            </div>
          </div>

          <nav class="list-group mt-3">
            <router-link 
            v-if="auth.hasPermission('view dashboard')" 
            to="/admin/dashboard"
            class="list-group-item list-group-item-action"
            :class="{ active: $route.path.includes('/admin/dashboard')}"
            >
            Dashboard
            </router-link>

            <router-link 
            v-if="auth.hasPermission('manage users')" 
            to="/admin/users"
            class="list-group-item list-group-item-action"
            :class="{ active: $route.path.includes('/admin/users')}"
            >
            Users
           </router-link>

           <router-link 
            v-if="auth.hasPermission('manage orders')" 
            to="/admin/orders"
            class="list-group-item list-group-item-action"
            :class="{ active: $route.path.includes('/admin/orders')}"
            >
            Orders
           </router-link>

            <router-link
            v-if="auth.hasPermission('manage categories')" 
            to="/admin/categories" 
            class="list-group-item list-group-item-action"
            :class="{ active: $route.path.includes('/admin/categories')}"
            >
            Categories
            </router-link>

           <router-link 
            v-if="auth.hasPermission('manage products')"
            to="/admin/products"
            class="list-group-item list-group-item-action"
            :class="{ active: $route.path.includes('/admin/products')}"
            >
              Products
            </router-link>
           <router-link 
            v-if="auth.hasPermission('manage products')"
            to="/admin/settings" 
            class="list-group-item list-group-item-action"
            :class="{ active: $route.path.includes('/admin/settings')}"
            >
              Settings
            </router-link>

          </nav>
        </aside>

        <!-- Main content -->
        <section class="col-lg-9 main">
         
            <slot></slot>

        </section>
      </div>
    </div>
  </main>

  <footer class="bg-light py-3 mt-5">
    <div class="container text-center small">
      &copy; 2025 SimpleShop Admin
    </div>
  </footer>



</template>


<script setup>
import { useAuth } from '../../../stores/auth';
// import { useRoute, useRouter } from 'vue-router';

const auth = useAuth()
const route = useRoute()
const router = useRouter()


const handleLogout = async ()=> {
    auth.logout('/admin/login')
}

</script>

  <style>
    /* Admin dashboard specific styles (no JS) */
    .admin-wrap { padding: 2.5rem 0; }
    .sidebar { min-width: 220px; }
    .stat { padding: 1rem; }
    .table-actions { min-width: 140px; }
    .muted-small { color: #6c757d; font-size: .9rem; }
    @media (max-width: 767px) {
      .sidebar { order: 2; }
      .main { order: 1; }
    }
  </style>