 <template>
 <!-- START LOGIN SECTION -->
    <div class="form-card">
        <div class="row">
            <div class="col-md-12">
                <label for="email">Email</label>
                <input type="text" v-model="email" placeholder="Enter your email">
            </div>

           <div>
             <button :disabled="auth.sending" @click="otpSend">
                <span>Send OTP</span>
            </button>
           </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <label for="email">Otp</label>
                <input type="text" v-model="otp" placeholder="Enter Your Otp">
            </div>

           <div>
             <button @click="verifyOtp">
                <span>Login</span>
            </button>
           </div>
        </div>
    </div>
<!-- END LOGIN SECTION -->
</template>

<!-- <template>
  
  <div class="form-card">

      <div class="row">

          <div class="col-md-12">
              <label for="email">Email</label>
              <input v-model="email" placeholder="Enter your email">
          </div>
          
          <div>
            <button :disabled="auth.sending" @click="otpSend">
              <span>Send OTP</span>
            </button>
          </div>
          

      </div>
      
      <div class="row">

          <div class="col-md-12">
              <label for="email">Opt</label>
              <input v-model="otp" placeholder="Enter OTP">
          </div>
          
          <div>
            <button @click="verifyOtp">
              <span>Login</span>
            </button>
          </div>
          

      </div>
  </div>

</template> -->
<script setup>

import { ref } from 'vue';
import { useAuth } from '../../stores/auth';

const auth = useAuth();

const email = ref(auth.email)
const otp = ref('')

const otpSend = () => {
    // alert()
    auth.sendOtp(email.value)
}

const verifyOtp = () => {
    // alert()
    auth.verifyOtp(otp.value)
}


</script>
