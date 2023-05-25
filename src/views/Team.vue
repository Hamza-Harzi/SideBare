<script setup>
import VueCarousel from "../components/VueCarousel.vue";
</script>
<template>
  <main>
    <VueCarousel @next="next" @prev="prev" />
  </main>
</template>
