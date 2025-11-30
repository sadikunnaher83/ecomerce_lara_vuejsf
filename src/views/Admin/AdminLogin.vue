<template>

     <main>
    <div class="admin-auth">
      <div class="card shadow-sm">
        <div class="card-body">
          <h4 class="card-title mb-3">Administrator Sign In</h4>

          <p class="note mb-3">This is a static demo login. Replace with server-side authentication in production.</p>

          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label for="adminEmail" class="form-label small">Email</label>
              <input 
              v-model="email"
              type="email" 
              class="form-control" 
              placeholder="admin@example.com" 
              required
              >
            </div>
            <div  v-if="step === 2" class="mb-3">
              <label for="adminOtp" class="form-label small">OTP</label>
              <input 
              v-model="otp"
              type="text" 
              class="form-control" 
              placeholder="Enter your Otp" 
              required
              >
            </div>

            <div class="d-flex justify-content-between align-items-center mb-3">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="adminRemember">
                <label class="form-check-label small" for="adminRemember">Remember me</label>
              </div>
              <a href="#" class="small">Forgot password?</a>
            </div>

            <div class="d-grid">
              <button
               type="submit"
               class="btn btn-primary">
                {{ step == 1 ? 'Send OTP' : 'Verify and Login' }}
              </button>
            </div>
          </form>

          <hr class="my-3">

          <div class="small text-muted text-center">
            Admin demo account: admin@example.com / password (static demo only)
          </div>
        </div>
      </div>
    </div>
  </main>

</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '../../stores/auth';
import { toast } from 'vue3-toastify';
import http from '../../lib/http';
import router from '../../router';

const auth = useAuth();

const email = ref(auth.email)
const otp = ref('')
const step = ref(1)

// const otpSend = () => {
//     // alert()
//     auth.sendOtp(email.value)
// }

// const verifyOtp = () => {
//     // alert()
//     auth.verifyOtp(otp.value)
// }

const handleSubmit = async () => {
    if(step.value === 1){
      if(!email.value){
        return toast.error('Email is required')
      }

      try {
            const {data} = await http.post('login/otp/send', { 
              email:email.value
           })

             toast.success(data?.messages || 'OTP sent to your email') 

             step.value = 2

      } catch(e){
          toast.error('Error!'.e)
      }

      return

    }

    if(!otp.value){
      toast.error('OTP is required')
    }

    try {
      const {data} = await http.post('login', { 
            email:email.value,
            otp:otp.value
      })

       const token = data?.data?.access_token
       const user = data?.data?.user

       if(!token || !user){
          toast.error('Error, invalid credentials')
       }

    
       localStorage.setItem('access_token', token)
       localStorage.setItem('user', JSON.stringify(user))

       toast.success(data?.messages)

       const isAdmin = user.role === 'admin' || (Array.isArray(user.roles) && user.roles.includes("admin"))

       if(!isAdmin)
       {
          toast.error('You are not admin!')
          auth.logout();
          return
       }


        toast.success('Your login is successful!')
          setTimeout( () => {
              router.push('/admin/dashboard')
          }, 2000)


    } catch(e){
      toast.error('error')
    }
}


</script>