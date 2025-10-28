import { defineStore } from 'pinia'

import http from "../lib/http";

import router from '../router'


export const useAuth = defineStore('auth', {
    state: () => ({
        email: '',
        access_token: localStorage.getItem('access_token') || null,
        sending: false,
        message: '',
        verifing: false,
    }),

    getters: {
        isAuthenticated: (check) => check.access_token ? true : false
    },
    actions: {
       async sendOtp(email){
            // this.sending = true

            try {
              const data = http.post('login/otp/send', { email })

            //   console.log(data)


              this.email = email
              this.message =  data?.messages
            } catch (error) {
                
            }
        },
       async verify(otp){

        // console.log(111)
       

            try {
              const { data } = await http.post('login', { email: this.email, otp })

            //   console.log(data)


              this.email = email
              this.message =  data?.messages
              this.token = data?.data?.access_token

              this.access_token = token

            //   console.log(this.access_token)

            } catch (error) {
                
            }
        },
    } 
})