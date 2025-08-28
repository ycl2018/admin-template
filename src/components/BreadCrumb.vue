<template>
  <div>
    <span v-for="(crumb, index) in crumbs" :key="index">
      <router-link
        v-if="index < crumbs.length - 1"
        :to="crumb.to"
        class="text-primary hover:underline"
      >
        {{ crumb.label }}
      </router-link>
      <span v-else class="text-dark-2 dark:text-gray-300">{{ crumb.label }}</span>
      <span v-if="index < crumbs.length - 1"
        ><i class="fa fa-angle-right mx-2 text-light-3"></i>
      </span>
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const crumbs = computed(() => {
  const matched = route.matched
  return matched.map((record, index) => {
    const { meta } = record
    return {
      label: meta.breadcrumb || `页面 ${index + 1}`, // 使用路由元信息中的breadcrumb，没有则用默认值
      to: record.path,
    }
  })
})
</script>

<style scoped>
.breadcrumb {
  margin-bottom: 10px;
  color: #666;
}
</style>
