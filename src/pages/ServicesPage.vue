<template>
    <div class="modal-box">
        <div class="modal-window">
            <h1>Order form</h1>
            <form>
                <label for="name">Name<span>*</span></label>
                <input type="text" id="name" required placeholder="John Doe"/>
                <label for="password">Phone Number<span>*</span></label>
                <input type="text" id="password" required placeholder="12345678" />
                <button>Submit Application</button>
            </form>
        </div>
    </div>
    <div class="services">
        <div class="heading">
            <h1>Services</h1>
            <hr>
        </div>
        <section class="main">
            <div>
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
                    <div class="products__card">
                        <img src="../assets/m100.png"/>
                        <div class="credentials">
                            <h2>M100</h2>
                            <p>Price</p>
                        </div>
                    </div>
                    <div class="products__card">
                        <img src="../assets/m200.png"/>
                        <div class="credentials">
                            <h2>M200</h2>
                            <p>Price</p>
                        </div>
                    </div>
                    <div class="products__card">
                        <img src="../assets/m300.png"/>
                        <div class="credentials">
                            <h2>M300</h2>
                            <p>Price</p>
                        </div>
                    </div>
                    <div class="products__card">
                        <img src="../assets/m400.png"/>
                        <div class="credentials">
                            <h2>M400</h2>
                            <p>Price</p>
                        </div>
                    </div>
                    <div class="products__card">
                        <img src="../assets/m550.png"/>
                        <div class="credentials">
                            <h2>M550</h2>
                            <p>Price</p>
                        </div>
                    </div>
                    <div class="products__card">
                        <img src="../assets/m600.png"/>
                        <div class="credentials">
                            <h2>M600</h2>
                            <p>Price</p>
                        </div>
                    </div>
                    <div class="products__card">
                        <img src="../assets/m700.png"/>
                        <div class="credentials">
                            <h2>M700</h2>
                            <p>Price</p>
                        </div>
                    </div>
                    <div class="products__card">
                        <img src="../assets/m800.png"/>
                        <div class="credentials">
                            <h2>M800</h2>
                            <p>Price</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </div>
</template>

<script>
export default {
    name: "ServicesPage",
}
</script>

<style scoped>
.services {
    position: relative;
}

.modal-box {
    border: 1px solid red;
    position: absolute;
    padding: 2rem;
    z-index: 100;
    margin: 0 auto;
}

.modal-window {
    z-index: 100;
    max-width: 508px;
    height: 458px;
    display: flex;
    align-items: center;
    gap: 50px;
    background: rgba(0,0,0,.1);
    backdrop-filter: blur(50px);
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);
    flex-direction: column;
}

.modal-window h1 {
    padding: 1rem 0;
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
    max-width: 500px;
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

.credentials {
    padding: .5rem 0;
    color: #FFFFFF;
    text-align: center;
    background: #3E3E3E;
}


.modal-window form {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 3rem;
}

.modal-window form input {
    border: 1px solid #D9D9D9;
    color: #fff;
    font-family: 'Poppins',sans-serif;
    height: 36px;
    border-radius: 6px;
    outline: none;
    padding: .75rem;
    margin-bottom: 10px;
}

.modal-window form input:focus {
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
</style>