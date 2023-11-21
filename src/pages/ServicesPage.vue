<template>
    <div class="services">
        <div class="modal" v-if="showModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <span class="close" @click="closeModal">&times;</span>
                    <slot>
                        <form @submit.prevent="submitApplication">
                            <label for="name">Name<span>*</span></label>
                            <input v-model="formData.name" id="name" type="text" required placeholder="John Doe" />
                            <label for="phoneNumber">Number<span>*</span></label>
                            <input v-model="formData.phoneNumber" id="phoneNumber" type="text" required placeholder="+9989 77 777 77 77" />
                            <button>Submit Application</button>
                        </form>
                    </slot>
                </div>
            </div>
        </div>
        <div class="heading">
            <h1>Services</h1>
            <hr>
        </div>
        <section class="main">
            <div class="main--info">
                <h1>Ready-mixed concrete</h1>
                <ul>
                    <li>Foundation pouring and screeding</li>
                    <li>Filling walls and courtyards</li>
                    <li>Highway pillows</li>
                    <li>Concrete products production</li>
                    <li>Pouring piles and crossbars</li>
                    <li>Floors of a private house</li>
                    <li>Bridges, tunnels, swimming pools and skyscrapers</li>
                </ul>
            </div>
            <img src="../assets/Rectangle55.png" />
        </section>
        <section class="products">
            <div class="heading">
                <h1>Products</h1>
            </div>
            <section class="main__products">
                <div class="products__cards snaps-inline">
                    <div class="products__card" v-for="product in getProducts" :key="product.id">
                        <img src="../assets/m100.png"/>
                        <div class="credentials">
                            <h2>{{ product.name }}</h2>
                            <p>{{ product.price }}</p>
                        </div>
                    </div>
                </div>
                <button @click="openModal">Order Concrete</button>
            </section>
        </section>
        <section class="machinery-rental">
            <div class="heading">
                <h1>Machinery Rental</h1>
                <CarouselSlider />
            </div>
        </section>
    </div>
</template>

<script>
import CarouselSlider from "@/components/CarouselSlider";
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "ServicesPage",
    components: {CarouselSlider},
    data() {
        return {
            showModal: false,
            carouselSlides: [
                { image: require('../assets/Rectangle59.png')},
                { image: require('../assets/image1.jpg')},
                { image: require('../assets/image2.jpg')},
                { image: require('../assets/image3.jpg')},
                { image: require('../assets/image4.jpg')},
            ],
            formData: {
                name: null,
                phoneNumber: null
            }
        }
    },
    methods: {
        ...mapActions(['fetchProducts','pushClient']),

        submitApplication() {
            this.pushClient(this.formData)
                .then(() => {
                    this.showModal = false
                })
        },

        openModal() {
            this.showModal = true
        },
        closeModal() {
            this.showModal = false
        },
    },

    mounted() {
        this.fetchProducts()
    },

    computed: {
        ...mapGetters(['getProducts'])
    }
}
</script>

<style scoped>
.services {
    position: relative;
}

.heading h1{
    padding: 1rem 3rem;
}

.main {
    padding: 1rem 3rem;
    display: flex;
    justify-content: center;
    gap: 100px;
}

.main h1 {
    margin-bottom: 20px;
}

.main ul {
    margin-left: 30px;
}

.main img {
    width: 500px;
}

.main__products {
    padding: 2rem 3rem;
}

.products__cards {
    display: grid;
    grid-auto-flow: column;
    overflow-y: hidden;
    overflow-x: auto;
    overscroll-behavior: contain;
}

.products__cards::-webkit-scrollbar {
    border-radius: 6px;
    background: #BCBCBC;
}

.products__cards::-webkit-scrollbar-thumb {
    background: #3E3E3E;
    border-radius: 6px
}

.snaps-inline {
    scroll-snap-type: inline mandatory;
}

.snaps-inline > * {
    scroll-snap-align: start;
}

.products__card {
    width: 250px;
    height: 350px;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 20px;
    align-self: center;
    justify-self: center;
}

.products__card img {
    width: 100%;
}

.products button {
    border-radius: 15px;
    text-decoration: none;
    background: #EA7E15;
    color: #fff;
    padding: 1rem 2rem;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    margin: 1.5rem 0;
}

.credentials {
    padding: .5rem 0;
    color: #FFFFFF;
    text-align: center;
    background: #3E3E3E;
}

.modal-content form {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 3rem;
}

.modal-content form input {
    border: 1px solid #D9D9D9;
    color: #000;
    font-family: 'Poppins',sans-serif;
    height: 36px;
    border-radius: 6px;
    outline: none;
    padding: .75rem;
    margin-bottom: 10px;
}

.modal-content form input:focus {
    background-color: rgba(16, 156, 241, 0.16);
    border: 1px solid #109CF1;
}

form label {
    font-family: 'Poppins', sans-serif;
    color: rgba(68, 65, 80, 1);
    margin-bottom: 10px;
}

form label span {
    color: rgba(16, 156, 241, 1);
}

form button {
    background-color: rgba(16, 156, 241, 1);
    font-family: 'Poppins', sans-serif;
    border-radius: 4px;
    width: 100%;
    padding: .75rem 1.5rem;
    margin-top: 10px;
    color: #ffffff;
    outline: none;
    border: none;
    align-self: center;
    cursor: pointer;
}

@media (max-width: 1089px) {
    .main {
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        gap: 20px;
    }

    .main--info {
        align-self: flex-start;
    }

    .main img {
        width: 100%;
    }
}

.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
}

.modal-dialog {
    max-width: 80%; /* Adjust this as needed */
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    position: relative;
}

.close {
    position: absolute;
    font-size: 1.5rem;
    top: 10px;
    right: 10px;
    cursor: pointer;
}
</style>