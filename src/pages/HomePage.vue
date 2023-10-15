<template>
    <div>
        <div class="container">
            <div class="intro">
                <h1>Any volume in any weather</h1>
                <p>We guarantee delivery thanks to automated production, streamlined logistics and chemical additives.</p>
                <router-link to="/services" class="btn">Find out the price</router-link>
            </div>
        </div>
        <main>
            <section class="main__intro">
                <h3>We produce a wide range of concrete grades: M100 - M800</h3>
                <div class="paragraph">
                    <p>Under the trademark StrongBeton” we produce concrete mixtures for all types of construction work.</p>
                    <p>Pouring foundations, walls and courtyards, floor screeds,<br>cushions for highways, creating reinforced concrete products, building bridges, dams, skyscrapers, etc.</p>
                </div>
                <router-link to="/services" class="main-btn">Ready Mixed Concrete</router-link>
            </section>
            <section class="main__preferences">
                <h2>Why choose us?</h2>
                <div class="preferences__cards">
                    <div class="card">
                        <h2>Best Quality</h2>
                        <p>We're proud to set the industry standard for excellence in concrete manufacturing. Our commitment to quality is unwavering, ensuring every batch meets the highest standards. With cutting-edge technology and a dedicated team, we deliver superior, durable concrete solutions that stand the test of time.</p>
                    </div>
                    <div class="card">
                        <h2>Laboratory control</h2>
                        <p>Laboratory control is at the heart of our commitment to excellence. Our state-of-the-art facilities and rigorous testing protocols ensure the highest quality concrete products, meeting or exceeding industry standards. We leave no room for compromise when it comes to quality control, guaranteeing customer satisfaction.</p>
                    </div>
                    <div class="card">
                        <h2>Online order monitoring</h2>
                        <p>We make online order monitoring seamless and efficient. Our user-friendly platform allows you to track your concrete orders in real-time, providing transparency and peace of mind. We're dedicated to delivering a superior customer experience from order placement to delivery.</p>
                    </div>
                    <div class="card">
                        <h2>Production technologies</h2>
                        <p>Concrete manufacturing employs versatile production technologies like batch plants, ready-mix, self-compacting concrete, high-performance mixes, lightweight concrete, and sustainable alternatives. These methods cater to diverse construction needs, ensuring quality, durability, and environmental responsibility in a dynamic industry.</p>
                    </div>
                </div>
            </section>
            <section class="main__rental">
                <img src="../assets/Rectangle32.png" />
                <div class="rental__info">
                    <h2>Equipment rental</h2>
                    <p>In addition to the sale of cement and ready-mixed concrete, we provide special rental services. technology. At our disposal:</p>
                    <ul>
                        <li>3 concrete mixers</li>
                        <li>1 autocrane</li>
                        <li>3 dump trucks</li>
                        <li>1 excavator loader</li>
                    </ul>
                    <p>
                        You can easily place an order for equipment rental by leaving
                        a request on the website or calling us. We look
                        forward to your call!
                    </p>
                    <router-link to="/services" class="btn btn-details">More Details</router-link>
                </div>
            </section>
            <section class="main__team">
                <h3>OUR TEAM</h3>
                <div class="team__cards snaps-inline">
                    <div class="team__card">
                        <img src="../assets/Rectangle37.png"/>
                        <div class="credentials">
                            <h2>Name</h2>
                            <p>Professional Name</p>
                        </div>
                    </div>
                    <div class="team__card">
                        <img src="../assets/Rectangle38.png"/>
                        <div class="credentials">
                            <h2>Name</h2>
                            <p>Professional Name</p>
                        </div>
                    </div>
                    <div class="team__card">
                        <img src="../assets/Rectangle39.png"/>
                        <div class="credentials">
                            <h2>Name</h2>
                            <p>Professional Name</p>
                        </div>
                    </div>
                    <div class="team__card">
                        <img src="../assets/Rectangle40.png"/>
                        <div class="credentials">
                            <h2>Name</h2>
                            <p>Professional Name</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>

export default {
    name: "HomePage",
    components: {
    }
}
</script>

<style scoped>

.container {
    height: 100vh;
    width: 100%;
    background: url("../assets/Rectangle2.png") no-repeat center;
    background-size: cover;
    display: flex;
    align-items: center;
}

.intro {
    color: #fff;
    padding: 0 12%;
}

.intro h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.intro p {
    max-width: 500px;
    margin-bottom: 2rem;
    font-weight: 400;
    font-size: 1.2rem;
}

.btn {
    border-radius: 15px;
    text-decoration: none;
    background: #EA7E15;
    color: #fff;
    padding: 1rem 2rem;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
}

@media (max-width: 874px) {
    .intro {
        padding: 0 5%;
    }

    .intro h1 {
        font-size: 2rem;
    }

    .intro p {
        font-size: 16px;
    }
}

.main__intro {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 2rem 3rem;
    border-radius: 6px;
    background: #FAFAFA;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 1rem;
}

.main__intro h3 {
    margin-top: 1rem;
    font-weight: 500;
}

.paragraph {
    text-align: center;
    font-weight: 400;
    margin: 1rem 0;
}

.main-btn {
    text-decoration: none;
    color: #000;
    border-radius: 15px;
    border: 2px solid #B3B184;
    background: #FFF;
    padding: 1rem .75rem;
    cursor: pointer;
    font-weight: 700;
}

.main__preferences {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
}

.preferences__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.card {
    max-width: 300px;
    border-radius: 6px;
    background: #FAFAFA;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin: 1rem;
}

.card h2 {
    text-align: center;
    margin: .5rem 0;
    background-color: #565656;
    color: #fff;
    padding: .75rem 0;
    font-weight: 500;
}

.card p {
    padding: 1.5rem 1rem;
}

@media (max-width: 1340px) {
    .preferences__cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 642px) {
    .preferences__cards {
        grid-template-columns: repeat(1, 1fr);
    }
}

.main__rental {
    display: flex;
    justify-content: center;
    gap: 100px;
    padding: 1rem 3rem;
    margin-top: 50px;
}

.main__rental img {
    max-width: 500px;
}

.rental__info {
    display: flex;
    flex-direction: column;
}

.rental__info h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 30px;
}

.rental__info p {
    margin: 15px 0;
    max-width: 430px;
    font-weight: 400;
}

.rental__info ul {
    margin-left: 40px;
}

.btn-details {
    padding: 1rem 3rem;
    font-weight: 500;
    align-self: center;
    margin-top: 15px;
}

@media (max-width: 1078px) {
    .main__rental {
        flex-direction: column;
        align-items: center;
    }

    .main__rental img {
        width: 100%;
        min-width: 200px;
    }
}

.main__team {
    padding: 2rem 3rem;
}

.main__team h3 {
    margin-bottom: 20px;
}

.team__cards {
    display: grid;
    grid-auto-flow: column;

    overflow-y: hidden;
    overflow-x: auto;
    overscroll-behavior: contain;
}

.team__cards::-webkit-scrollbar {
    border-radius: 6px;
    background: #BCBCBC;
}

.team__cards::-webkit-scrollbar-thumb {
    background: #3E3E3E;
    border-radius: 6px
}

.snaps-inline {
    scroll-snap-type: inline mandatory;
}

.snaps-inline > * {
    scroll-snap-align: start;
}

.team__card {
    width: 250px;
    height: 400px;
    background: #3E3E3E;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 20px;
    align-self: center;
    justify-self: center;
}

.team__card img {
    width: 100%;
}

.credentials {
    padding: .5rem 0;
    color: #FFFFFF;
    text-align: center;
}

</style>