<template>
  <form class="">
    <div class="relative ml-1 w-[500px]">
      <div class="absolute inset-y-0 left-[450px] flex items-center pl-3">
        <button type="submit" class="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <!--search input-->
      <input
        v-model="input"
        type="search"
        class="p-3 pl-3 text-lg text-gray-900 border-b border-gray-300 rounded bg-stone-50 w-[500px]"
        placeholder="Search Mockups, Logos..."
      />
    </div>
  </form>
  <!--map-->
  <div class="w-full flex justify-between flex-wrap mt-[100px]">
    <div
      v-for="data in filteredList()"
      :key="data.id"
      class="w-[200px] m-[10px]"
    >
      <h1>{{ data.name }}</h1>
      <p>{{ data.description }}</p>
      <span
        >{{ data.price }}<span>{{ data.currency }}</span></span
      >
    </div>
    <!--filter-->
    <div class="item error" v-if="input && !filteredList().length">
      <p>No results found!</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import dataJson from "../assets/data.json";

import { ref } from "vue";

let input = ref("");

export default defineComponent({
  data() {
    return {
      dataJson,
      input,
    };
  },
  props: {
    items: [],
  },
  methods: {
    filteredList() {
      return this.items!.filter((product) =>
        product.name.toLowerCase().includes(input.value.toLowerCase())
      );
    },
  },
});
</script>
