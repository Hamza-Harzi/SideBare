<template>
  <div class="flex">
    <SideBar />
    <router-view />
  </div>
</template>

<style scoped></style>
<script>
import SideBar from "./components/SideBar.vue";

export default {
  components: {
    SideBar,
  },
};
</script>
