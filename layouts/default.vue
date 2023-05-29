<template>
  <div>
    <el-container class="h-[100vh]">
      <SideBar />
      <el-main class="w-[100%]">
        <slot />
      </el-main>
    </el-container>
  </div>
</template>
