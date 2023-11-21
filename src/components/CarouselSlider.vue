<template>
    <div class="carousel">
        <div class="image-carousel" :style="{ maxWidth: carouselWidth, height: carouselHeight }">
            <div class="carousel-container" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div class="slide" v-for="(item, index) in images" :key="index">
                    <img :src="item.image" alt="Slide" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                { image: require('../assets/Rectangle59.png') },
                { image: require('../assets/image1.jpg') },
                { image: require('../assets/image2.jpg') },
                { image: require('../assets/image3.jpg') },
                { image: require('../assets/image4.jpg') },
            ],
            currentIndex: 0,
            interval: null,
            carouselWidth: '600px',
            carouselHeight: '500px',
            intervalTime: 4000,
        };
    },
    created() {
        this.startSlideShow();
    },
    methods: {
        startSlideShow() {
            this.interval = setInterval(this.nextSlide, this.intervalTime);
        },
        stopSlideShow() {
            clearInterval(this.interval);
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
    },
};
</script>

<style scoped>

.carousel {
    padding: 1rem 3rem;
}
.image-carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.carousel-container {
    display: flex;
    width: 100%;
    transition: transform 0.5s;
}

.slide {
    width: 600px; /* Set the width and height as needed */
    height: 500px;
    flex: 0 0 100%;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>