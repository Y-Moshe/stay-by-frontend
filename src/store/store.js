import Vuex from 'vuex'

import { userStore } from './user.store.js'
import { reviewStore } from './review.store.js'
// import { stayStore } from './stay.store.js'
import { stayStore } from './stay.store.js'
import { orderStore } from './order.store.js'

export const store = Vuex.createStore({
    strict: true,
    modules: {
        userStore,
        reviewStore,
        // stayStore,
        stayStore,
        orderStore,
    },
    state: {},
    mutations: {},
    actions: {},
})
