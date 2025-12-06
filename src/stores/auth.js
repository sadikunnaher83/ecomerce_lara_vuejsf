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
        isAuthenticated: (check) => check.access_token ? true : false,
        isAdmin: (check) => check.user?.role === 'admin',
        hasPermission: (check) => {

            return (permission) => {
                if(!check.user || !check.user.permissions) return false;

                 return check.user.permissions.includes(permission);
            }

        }

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
                this.message = data?.messages
                console.log(user);   
              

                if(token && user)
                {
                    // alert(token)
                    this.access_token = token
                    this.user = user
                    localStorage.setItem('access_token', token)
                    localStorage.setItem('user', JSON.stringify(user))

                    toast.success(this.message)
                   

                    setTimeout( () => {  
                        
                        if (user.role == 'admin') {

                             router.push('/admin/dashboard')

                        }else{
                            
                             router.push('/dashboard/my-account')
                        }
                         
                    }, 2000)


                }
                
                
            } catch (error) {
                
            }
        },

        logout(redirectRoute = '/login')
        {
            this.access_token = null 
            localStorage.removeItem('access_token')
            localStorage.removeItem('user')
            this.email = ''

            toast.success('Logout successful!')

            setTimeout( () => {
                router.push(redirectRoute)
            }, 2000) 
        }
    } 
})