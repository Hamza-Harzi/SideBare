<template>
  <div class="relative w-[600px] h-[350px] overflow-hidden">
    <slot></slot>

    <button @click="next" class="right-0">Next</button
    ><button @click="prev" class="left-0">Prev</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    next() {
      this.$emit("next");
    },
    prev() {
      this.$emit("prev");
    },
  },
};
</script>
<style scoped>
button {
  position: absolute;
  height: 40px;
  width: 50px;
  top: calc(50% - 20px);
  background-color: rgba(0, 0, 0, 0.8);
  border: none;
  color: #fff;
}
button:focus,
button:hover {
  outline: none;
  cursor: pointer;
}
</style>
