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
              console.log(email);
             this.sending = true

            try {
              const data = http.post('login/otp/send', { email })

            //   console.log(data)
              this.email = email
              this.message =  data?.messages
            } catch (error) {
                
            }
        },
       async verifyOtp(otp){

        // console.log(111)
       

            try {

                const { data }  = await http.post('login', { email: this.email , otp })
                const token = data?.data?.access_token

                if(token)
                {
                    alert(token)
                }
                
                
            } catch (error) {
                
            }
        },
    } 
})