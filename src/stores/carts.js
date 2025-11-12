import { defineStore } from 'pinia';

import http from '../lib/http';

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
        }
    }






})