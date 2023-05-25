<template>
  <div class="modal" v-show="value">
    <div class="flex justify-between mr-[10px]">
      <div class="modal__title">Add Product</div>
      <button class="left-0" type="button" @click="$emit('close')">
        Close
      </button>
    </div>
    <div class="border border-1 border-solid mt-[15px]"></div>
    <div class="container w-[500px]">
      <div class="mt-[20px]">
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your product</label
        >
        <input
          v-model="product.name"
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          placeholder="Enter Your Product Name"
        />
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-[10px]"
          >Description</label
        >
        <input
          v-model="product.description"
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          placeholder="Enter the Description of Your Product"
        />
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-[10px]"
          >Price</label
        >
        <input
          v-model="product.price"
          type="number"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        />
      </div>
    </div>
    <div class="border border-1 border-solid mt-[35px]"></div>

    <button
      @click="$emit('add', product)"
      class="mt-[10px] rounded-md border border-1 border-solid bg-blue-500 px-[30px] py-[8px]"
    >
      Add
    </button>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    value: {
      required: true,
    },
    close: {
      type: Function,
      required: true,
    },
  },

  emits: ["close", "add"],
  data() {
    return {
      showModal: false,
      product: {
        name: "",
        description: "",
        price: 0,
      },
    };
  },
};
</script>

<style lang="css" scoped></style>
