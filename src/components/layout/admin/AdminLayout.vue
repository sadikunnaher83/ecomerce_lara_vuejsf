<template>


    <div class="admin-wrapper d-flex">
        <!--Sidebar-->
        <nav class="bg-dark text-white p-3" style="width: 240px; min-height: 100vh;">
            <h5 class="mb-4">Admin Panel</h5>
            <ul class="nav flex-column">
                <li nav-item mb-2>
                    <router-link
                    class="nav-link text-white"
                    active-class="active"
                    :to="{ name: 'admin.dashboard'}"
                    >
                     Dashboard
                    </router-link>
                </li>

                <!-- future admin menu items here  -->

                <li class="nav-item mt-4">
                   <button
                   class="btn btn-outline-light btn-sm w-100"
                   @click="handleLogout"
                   >
                    Logout
                   </button>
                </li>
            </ul>
        </nav>
        <!--Main Content-->
        <div class="flex-grow-1">
            <!-- Top bar -->
             <header 
             class="bg-light border-bottom py-2 px-3 d-flex justify-content-between align-items-center">
                <div>
                    <strong>{{ auth.user?.name || 'Administrator'}}</strong>
                    <small class="text-muted ms-2">
                        {{ auth.user?.email || 'admin@example.com' }}
                    </small>
                </div>
                <span class="badge bg-primary text-uppercase">
                    {{ auth.user?.role || 'ADMIN' }}
                </span>
             </header>

             <!-- page content from current route -->
              <main>
                <slot />
              </main>
           </div>
         </div>



</template>


<script setup>
import { useAuth } from '../../../stores/auth';

const auth = useAuth()



</script>