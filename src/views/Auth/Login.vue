 <template>
<!-- START LOGIN SECTION -->
<div class="login_register_wrap section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-md-10">
                <div class="login_wrap">
            		<div class="padding_eight_all bg-white">
                        <div class="heading_s1">
                            <h3>Login</h3>
                        </div>
                            <div class="form-group mb-3">
                                <input 
                                type="text" 
                                v-model="email"
                                class="form-control" 
                                placeholder="Your Email"
                                >
                            </div>
                            <div class="form-group mb-3">

                                <button 
                                class="btn btn-fill-out btn-block" 
                                :disabled="auth.sending || !email"
                                @click="otpSend"
                                name="login">
                                    Send OTP
                                </button>

                            </div>

                            <p v-if="auth.message">
                                {{ auth.message }}
                            </p>


                             <div class="form-group mb-3">

                                <input 
                                type="text" 
                                v-model="otp"
                                class="form-control"  
                                placeholder="Your OTP"
                                >
                            </div>
                            <div class="form-group mb-3">
                                <button 
                                class="btn btn-fill-out btn-block" 
                                :disabled="auth.verifing || otp.length !== 6"
                                @click="verifyOtp"
                                name="login"
                                >
                                Log in
                               </button>
                            </div>
                        <div class="different_login">
                            <span> or</span>
                        </div>
                        <div class="form-note text-center">Don't Have an Account? <a href="signup.html">Sign up now</a></div>
                    </div>
                </div>
            </div>
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
