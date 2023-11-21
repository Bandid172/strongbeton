<template>
    <footer class="footer">
        <div class="upper__footer">
            <section class="credentials">
                <img src="../assets/logo.png" />
                <p><strong>Address: </strong>I.Karimov st 21, Termez, Surkhandarya 190100</p>
                <p><strong>Mail: </strong>info@strongbeton.uz</p>
                <div class="social__links">
                    <a href="#"><i class='bx bxl-telegram'></i></a>
                    <a href="#"><i class='bx bxl-instagram' ></i></a>
                    <a href="#"><i class='bx bxl-facebook-circle'></i></a>
                </div>
                <p><strong>Contact number: </strong> +998 (93) 790 01 10</p>
            </section>
            <section class="application__submit">
                <h2>Submit your application</h2>
                <form class="application-form" @submit.prevent="submitApplication">
                    <label for="name">Your Name</label>
                    <input v-model="formData.name" type="text" id="name">
                    <label for="phoneNumber">Your Phone Number</label>
                    <input v-model="formData.phoneNumber" type="text" id="phoneNumber">
                    <button>Submit</button>
                </form>
            </section>
        </div>
        <div class="lower__footer">
            <h3>Copyright © StrongBeton 2023 </h3>
        </div>
    </footer>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "FooterRow",
    data() {
        return {
            formData: {
                name: null,
                phoneNumber: null
            }
        }
    },
    methods: {
        ...mapActions(['pushClient']),
        submitApplication() {
            this.pushClient(this.formData)
                .then(() => {
                    this.formData.name = ''
                    this.formData.phoneNumber = ''
                })
        }
    }
}
</script>

<style scoped>

.upper__footer {
    display: flex;
    justify-content: space-evenly;
    padding: 1rem 2rem;
    background-color: #3E3E3E;
    color: #fff;
}

.lower__footer {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 1rem 2rem;
    background: radial-gradient(50% 50% at 50% 50%, #E88412 0%, #E9721A 100%);
}

.lower__footer::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 60px;
    display: block;
    width: 100%;
    height: 10px;
    background: radial-gradient(50% 50% at 50% 50%, #FFF 0%, #B7B7B7 100%);
}

.social__links {
    margin: 1.5rem 0;
}

.social__links a {
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
}

.credentials img {
    margin-bottom: 1rem;
}

.credentials p {
    margin-bottom: .5rem;
}

.application__submit h2 {
    font-weight: 700;
    margin-bottom: 2rem;
}

.application-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.application-form input {
    border: none;
    outline: none;
    border-radius: 5px;
    background: #D9D9D9;
    width: 100%;
    padding: .5rem 1rem;
    margin: .75rem 0;
}

.application-form button {
    align-self: flex-end;
    border-radius: 7px;
    background: #EA7E15;
    color: #fff;
    border: none;
    outline: none;
    padding: .5rem 1.75rem;
    cursor: pointer;
}


@media (max-width: 874px) {
    .upper__footer {
        flex-direction: column;
        align-items: flex-start;
        gap: 50px;
    }

    .application__submit {
        align-self: flex-end;
    }
}

</style>