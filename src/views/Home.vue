<template>
  <div class="">
    <div class="flex">
      <button class="btn" @click="openModal" v-if="!modalOpen">
        Open Modal
      </button>
      <modal-direction
        :value="modalOpen"
        v-model="modalOpen"
        @close="close"
        @add="addProduct"
      ></modal-direction>
    </div>
    <CardMode :items="items"></CardMode>
  </div>
</template>

<script>
import CardMode from "../components/CardMode.vue";
import dataJson from "../assets/data.json";
import ModalDirection from "../components/Modal.vue";

export default {
  components: {
    ModalDirection,
    CardMode,
  },
  data() {
    return {
      modalOpen: false,
      items: dataJson.ourProduct,
    };
  },

  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen;
    },
    close() {
      console.log("closed  ");
      this.modalOpen = false;
    },
    addProduct(product) {
      this.items.push({
        ...product,
        id: Date.now(),
        currency: "USD",
      });
      product.name("");
    },
  },
};
</script>
