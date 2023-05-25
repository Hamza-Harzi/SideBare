<script setup lang="ts">
import { ref } from "vue";

const show = ref(true);

const hideItem = () => {
  show.value = !show.value;
};
const showSidebar = ref(true);
</script>

<template>
  <aside class="flex flex-col relative min-h-screen bg-cyan-950">
    <div
      :class="show ? 'w-[calc(2.8rem+10px)]' : 'w-[300px]'"
      class="pt-3 w-[300px] pl-3 transition duration-[0.3s] ease-out"
    >
      <div :class="show ? '' : 'flex items-center justify-center'">
        <div class="flex">
          <!--button troi ligne-->
          <button @click="showSidebar = !showSidebar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-9 h-9 text-slate-200"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
          <h1 v-if="!show" class="text-slate-200 w-[200px] pl-5 text-2xl">
            workflow
          </h1>
        </div>
        <div class="mt-[40px]">
          <!--button flech-->
          <button class="" @click="hideItem">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7 text-slate-200"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        v-if="showSidebar"
        :class="show ? 'w-[calc(2.8rem+10px)]' : 'w-[300px]'"
        class="w-[300px] pl-1"
      >
        <router-link to="/">
          <div class="flex mt-[40px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 text-slate-200"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <h3
              v-if="!show"
              class="text-slate-200 w-[200px] font-[30px] pl-5 text-xl"
            >
              Home
            </h3>
          </div>
        </router-link>
        <router-link to="/about">
          <div class="flex mt-[30px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 text-slate-200"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>

            <h3 v-if="!show" class="text-slate-200 w-[200px] pl-5 text-xl">
              About
            </h3>
          </div>
        </router-link>
        <router-link to="/team">
          <div class="flex mt-[30px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 text-slate-200"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>

            <h3 v-if="!show" class="text-slate-200 w-[200px] pl-5 text-xl">
              Team
            </h3>
          </div>
        </router-link>
        <router-link to="/contact">
          <div class="flex mt-[30px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 text-slate-200"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>

            <h3 v-if="!show" class="text-slate-200 w-[200px] pl-5 text-xl">
              Contact
            </h3>
          </div>
        </router-link>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
