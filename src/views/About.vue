<template>
  <swiper
    class="w-[700px] h-[300px] p-[50px] mt-[400px]"
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
  >
    <swiper-slide
      v-for="image in images"
      :key="image"
      class="bg-center bg-cover w-[300px] h-[300px]"
      ><img class="block w-[400px] ml-[150px]" :src="image" alt="image1"
    /></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  data() {
    return {
      images: {
        image1: "https://swiperjs.com/demos/images/nature-1.jpg",

        image2: "https://swiperjs.com/demos/images/nature-2.jpg",

        image3: "https://swiperjs.com/demos/images/nature-3.jpg",

        image4: "https://swiperjs.com/demos/images/nature-4.jpg",

        image5: "https://swiperjs.com/demos/images/nature-5.jpg",
      },
    };
  },
};
</script>
