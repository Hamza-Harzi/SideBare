<template>
  <carousel
    @next="next"
    @prev="prev"
    class="ml-[600px] mt-[350px]"
    @mouseenter="pauseCarousel"
    @mouseleave="resumeCarousel"
  >
    <carousel-slide
      v-for="(slide, index) in slides"
      :key="slide"
      :index="index"
      :visibleSlide="visibleSlide"
      class="carousel-slider"
    >
      <img :src="slide" :alt="slide" />
    </carousel-slide>
  </carousel>
</template>

<script>
import Carousel from "./Carousel.vue";
import CarouselSlide from "./CarouselSlide.vue";
export default {
  components: {
    Carousel: Carousel,
    CarouselSlide: CarouselSlide,
  },
  data() {
    return {
      slides: [
        "https://picsum.photos/id/230/600/300",
        "https://picsum.photos/id/231/600/300",
        "https://picsum.photos/id/232/600/300",
        "https://picsum.photos/id/233/600/300",
        "https://picsum.photos/id/234/600/300",
        "https://picsum.photos/id/235/600/300",
        "https://picsum.photos/id/236/600/300",
      ],
      visibleSlide: 0, //show me the first slide in the beginning//and the index above is just to use visibleSlide
    };
  },

  computed: {
    slidesLen() {
      return this.slides.length;
    },
  },

  methods: {
    next() {
      if (this.visibleSlide >= this.slidesLen - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
    },
    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLen - 1;
      } else {
        this.visibleSlide--;
      }
    },
    startCarousel() {
      this.interval = setInterval(() => {
        this.next();
      }, 500); // Adjust the timeout value (in milliseconds) as needed
    },
    stopCarousel() {
      clearInterval(this.interval);
    },
    pauseCarousel() {
      this.stopCarousel();
    },
    resumeCarousel() {
      this.startCarousel();
    },
  },
  mounted() {
    this.startCarousel();
  },

  beforeDestroy() {
    this.stopCarousel();
  },
};
</script>
(html comment removed: Add "scoped" attribute to limit CSS to this component
only )
<style scoped>
.wrapper-parent {
  width: auto;
}
</style>
