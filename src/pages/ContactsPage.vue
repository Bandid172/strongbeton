<template>
        <div class="contacts">
            <div class="heading">
                <h1>Contacts</h1>
                <hr>
            </div>
            <div class="address">
                <div class="address__details">
                    <p><strong>Address:</strong> Surxondaryo vil, Termiz sh, Islom Karimov ko'chasi, 21-uy</p>
                    <p><strong>Mail:</strong> info@strongbeton.uz</p>
                    <p><strong>Contact</strong> +998 93 790 01 10</p>
                </div>
                <div class="address__map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d993.6555390958696!2d67.29555110853298!3d37.238477369374664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDE0JzE4LjQiTiA2N8KwMTcnNDUuMSJF!5e1!3m2!1sen!2s!4v1697103674929!5m2!1sen!2s" :width="frameWidth" :height="frameHeight" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
</template>

<script>

export default {
    name: "ContactsPage",
        data() {
            return {
                frameWidth: 600, // Default frame width
                frameHeight: 450,
                windowWidth: window.innerWidth // Get the initial window width
            };
        },
        computed: {
            shouldSetFrameWidth() {
                return this.windowWidth < 651;
            }
        },
        watch: {
            shouldSetFrameWidth(newVal) {
                if (newVal) {
                    this.frameWidth = 400;
                    this.frameHeight = 300;
                } else {
                    this.frameWidth = 600; // Set it back to the default width when the condition is not met
                    this.frameHeight = 450;
                }
            }
        },
        mounted() {
            // Add a window resize event listener to track window width changes
            window.addEventListener('resize', this.handleWindowResize);
        },
        methods: {
            handleWindowResize() {
                this.windowWidth = window.innerWidth;
            }
        },
        beforeUnmount() {
            window.removeEventListener('resize', this.handleWindowResize);
        },
}
</script>

<style scoped>

.contacts {
    height: 100vh;
}

.contacts h1 {
    padding: 1rem 3rem;
}

.address {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 1rem 3rem;
    height: 80%;
}

.address__details {
    margin-top: 50px;
}

.address__details p{
    margin-top: 20px;
    max-width: 400px;
    line-height: 25px;
    font-size: 1.5rem;
}

@media (max-width: 1162px) {
    .address {
        flex-direction: column;
    }
}
</style>