import { defineStore } from 'pinia';

import http from '../lib/http';
import { toast } from 'vue3-toastify';


export const useCart = defineStore('cart', {
    state: () => ({
        items: [],
    }),


    getters: {
        count: (cartItem) => cartItem.items.length,
        subtotal: (cartItem) => cartItem.items.reduce((sum, i) => sum + i.quantity * i.price, 0)
    },

    actions: {

        async cartItemsLoad() {
            try {
                   const { data } = await http.get('/carts')
                   this.items = data?.data ?? []
            } catch (error) {
                
            }
        },
        async removeCartItem(cartId) {
            try {
                   const { data } = await http.post('/remove/cart', {
                    cart_id: cartId
                   })

                //    console.log(response)
                toast.success(data.messages)
                this.items = this.items.filter(i => i.id != cartId)
            
            } catch (error) {
                
            }
        },

         async clearCart() {
            try {
                   const { data } = await http.get('/clear/cart')
                //    console.log(data) 
                 toast.success(data.messages)   
            } catch (error) {
                
            }
        }
    }






})