<template>
        <div class="contacts">
            <div class="heading">
                <h1>Contacts</h1>
                <hr>
            </div>
            <div class="address">
                <div class="address__details">
                    <p><strong>Address:</strong> Surkhandarya region, Termez, Alisher Navoi st 21</p>
                    <p><strong>Mail:</strong> info@strongbeton.uz</p>
                    <p><strong>Contact</strong> +998 93 790 01 10</p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1588.1954913328536!2d67.295973!3d37.23843!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDE0JzE4LjQiTiA2N8KwMTcnNDUuMSJF!5e0!3m2!1sen!2sus!4v1700466052077!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
</template>

<script>

export default {
    name: "ContactsPage",
}
</script>

<style scoped>

.contacts h1 {
    padding: 1rem 3rem;
}

.address {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
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

iframe {
    max-width: 800px;
    width: 100%;
}

@media (max-width: 1289px) {
    .address {
        flex-direction: column;
        padding: 1rem 1.5rem;
    }
}

@media (max-width: 650px) {
    .address__details p{
        font-size: 18px;
    }
}
</style>