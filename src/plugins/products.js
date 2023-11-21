import axios from "axios";

export default {
    actions: {
        fetchProducts(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8505/api/products')
                    .then((response) => {
                        let products = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }

                        context.commit('updateProducts', products)
                        resolve()
                    })
                    .catch(() => {
                        reject()
                    })
            })
        },
    },

    mutations: {
        updateProducts(state,products) {
            state.products = products
        }
    },

    state: {
        products: {
            models: [],
            totalItems: 0
        }
    },

    getters: {
        getProducts(state) {
            return state.products.models
        }
    }
}