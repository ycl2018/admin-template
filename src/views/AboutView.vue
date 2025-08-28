<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <p>这是关于页</p>
    <RouterLink to="/items/hello" class="text-primary hover:underline">前往二级页面</RouterLink>
    <div class="flex mt-5 p-5 border border-dashed border-light-2 rounded-lg bg-white">
      <router-view></router-view>
    </div>
  </div>
</template>
