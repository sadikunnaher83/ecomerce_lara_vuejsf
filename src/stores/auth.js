import { defineStore } from 'pinia'

import http from "../lib/http";

import router from '../router'

import { toast } from 'vue3-toastify';


export const useAuth = defineStore('auth', {
    state: () => ({
        email: '',
        access_token: localStorage.getItem('access_token') || null,
        sending: false,
        message: '',
        verifing: false,
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    }),

    getters: {
        isAuthenticated: (check) => check.access_token ? true : false
    },

    actions: {
       async sendOtp(email){
            //   console.log(email);
             this.sending = true

            try {
              const {data} = await http.post('login/otp/send', { email })

            //   console.log(data)
              this.email = email
              this.message =  data?.messages
            } catch (error) {
                
            }
        },
       async verifyOtp(otp){

        // console.log(111)
       this.verifing = true

            try {

                const { data }  = await http.post('login', { email: this.email , otp })
                const token = data?.data?.access_token
                const user = data?.data?.user
           
                console.log(user);
                

                // if(user)
                // {
                //        localStorage.setItem('user', token)
                // }


                this.message = data?.messages


                if(token)
                {
                    // alert(token)
                    this.access_token = token
                    localStorage.setItem('access_token', token)

                    toast.success(this.message)
                   

                    setTimeout( () => {       
                          router.push('/dashboard/my-account')
                    }, 2000)


                }
                
                
            } catch (error) {
                
            }
        },

        logout()
        {
            this.access_token = null 
            localStorage.removeItem('access_token')
            this.email = ''

            toast.success('Logout successful!')

            setTimeout( () => {
                router.push('/login')
            }, 2000) 
        }
    } 
})