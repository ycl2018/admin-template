<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useRootStore } from '../stores/nav'
import { ref } from 'vue'

const { navi, collapse, level } = defineProps(['navi', 'collapse', 'level'])

const rootStore = useRootStore()

const navis = ref(rootStore.navis)

const hasChildren = navi.chidrens && navi.chidrens.length > 0

const inActive = (navi) => {
  navi.active = false
  if (navi.chidrens) {
    navi.chidrens.forEach((child) => {
      inActive(child)
    })
  }
}

const setActive = (navi) => {
  navis.value.forEach((nav) => {
    inActive(nav)
  })
  navi.active = true
}

onMounted(() => {})
</script>

<template>
  <div>
    <!-- 自身 -->
    <div
      class="menu-item-hover flex items-center py-3 rounded-md cursor-pointer group"
      v-if="hasChildren"
      :class="[
        { 'sidebar-item-active': navi.active },
        collapse ? 'px-2 justify-center relative text-sm' : 'px-4 justify-between',
      ]"
    >
      <div class="flex flex-wrap items-center" :class="[collapse ? 'flex-col gap-1' : 'gap-3']">
        <i class="w-5 text-center" :class="[navi.icon ? navi.icon : '']"></i>
        <span class="sidebar-transition" :class="[collapse ? 'whitespace-nowrap' : '']">{{
          navi.name
        }}</span>
      </div>
      <i
        class="fa fa-angle-down transition-transform duration-300 group-hover:rotate-180"
        :class="[collapse ? 'absolute right-1 text-[0.6rem] ' : '']"
      ></i>
    </div>
    <RouterLink
      v-else
      :to="navi.path"
      class="menu-item-hover items-center flex py-3 rounded-md"
      :class="[
        { 'sidebar-item-active': navi.active },
        collapse ? 'px-2 flex-col justify-center text-sm' : 'px-4 gap-3',
      ]"
      @click="setActive(navi)"
    >
      <i class="w-5 text-center" :class="[navi.icon ? navi.icon : '']"></i>
      <span class="sidebar-transition">{{ navi.name }}</span>
    </RouterLink>

    <!-- 子菜单 -->
    <div
      v-if="navi.chidrens && navi.chidrens.length > 0"
      class="space-y-1 slide-down text-dark-2 hidden dark:text-gray-300"
      :class="[collapse ? `bg-light-${level} dark:bg-gray-800` : 'pl-6 ']"
    >
      <NavItem
        v-for="child in navi.chidrens"
        :key="child.name"
        :navi="child"
        :collapse="collapse"
        :level="level + 1"
      ></NavItem>
    </div>
  </div>
</template>

<style></style>
