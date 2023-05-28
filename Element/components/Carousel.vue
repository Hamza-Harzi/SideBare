<template>
  <el-carousel :interval="3000" type="card" height="300px">
    <el-carousel-item v-for="slide in slides" :key="slide">
      <img class="flex justify-center w-[700px]" :src="slide" :alt="slide" />
    </el-carousel-item>
  </el-carousel>
</template>
<script setup>
const slides = [
  "https://picsum.photos/id/299/600/300",
  "https://picsum.photos/id/301/600/300",
  "https://picsum.photos/id/266/600/300",
  "https://picsum.photos/id/188/600/300",
  "https://picsum.photos/id/130/600/300",
  "https://picsum.photos/id/320/600/300",
  "https://picsum.photos/id/336/600/300",
];
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}
</style>
