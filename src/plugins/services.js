import axios from "axios";

export default {
    actions: {
        pushClient(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:8505/api/clients', data, {
                        headers: {
                            'Content-Type': 'application/ld+json'
                        }
                    })
                    .then((response) => {

                        let clients = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }

                        context.commit('updateClient', clients)
                        resolve()
                    })
                    .catch(() => {
                        reject()
                    })
            })
        }
    },

    mutations: {
        updateClient(state, client) {
            state.client = client
        }
    },

    state: {
        client: {
            models: [],
            totalItems: 0
        }
    },

    getters: {
        getClients(state) {
            return state.client.models
        }
    }
}