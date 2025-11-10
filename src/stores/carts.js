import { defineStore } from 'pinia';

import http from '../lib/http';

export const useCart = defineStore('cart', {
    state: () => ({
        items: [],
    }),


    getters: {
        count: (cartItem) => cartItem.items.length
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