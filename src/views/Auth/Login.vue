 <template>
  <div class="form-card">
    <h2 style="margin-top:0">Login with OTP</h2>

    <div class="row">
      <div>
        <label>Email</label>
        <input
          v-model="email"
          type="email"
          placeholder="you@example.com"
        />
      </div>
      <div style="display:flex; gap: 0.5rem;">
        <button :disabled="auth.sending" @click="send">
      {{ auth.sending ? 'Sending...' : 'Send OTP' }}
        </button>

        <span v-if="auth.message">
            {{ auth.message}}
        </span>
      </div>
    </div>

    <br />

    <div class="row">
      <div>
        <label>OTP</label>
        <input
          v-model="otp"
          type="text"
          maxlength="6"
          placeholder="6-digit code"
        />
      </div>
      <button @click="verify">
        Verify and Login
      </button>
    </div>
  </div>
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

const auth = useAuth()

const email = ref(auth.email || '');
const otp = ref('');


const send = () => {
     auth.sendOtp(email.value)
}
const verify = () => {

  // console.log('i am verifyed')

     auth.verify(otp.value)
}


</script>
