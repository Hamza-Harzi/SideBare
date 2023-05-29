<template>
  <div>
    <el-input
      v-model="input3"
      class="pt-[100px] p-[300px]"
      size="small"
      placeholder="Please Input"
      :prefix-icon="Search"
    />
  </div>
  <div>
    <el-row>
      <el-col v-for="item in filteredList()" :key="item.id" class="flex">
        <el-card class="w-[200px]">
          <ul>
            <li>{{ item.name }}</li>
            <li>{{ item.profession }}</li>
            <li>{{ item.age }} ans</li>
            <li>{{ item.genre }}</li>
          </ul>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
</style>
<script setup>
import DataFile from "../static/data.json";
import { ref } from "vue";

import { Search } from "@element-plus/icons-vue";

const input3 = ref("");

const DataToFilter = DataFile.users;
const addProduct = (product) => {
  DataToFilter.push({
    ...product,
    id: Date.now(),
  });
};
const filteredList = () => {
  return DataToFilter.filter((product) =>
    product.name.toLowerCase().includes(input3.value.toLowerCase())
  );
};
</script>
