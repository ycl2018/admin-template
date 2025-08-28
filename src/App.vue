<script setup>
import { RouterView } from 'vue-router'
import NavItem from './components/NavItem.vue'
import { useRootStore } from './stores/nav'
import { onMounted } from 'vue'
import BreadCrumb from './components/BreadCrumb.vue'
import UserSettings from './views/UserView.vue'
import NotifyMessage from './views/MessageView.vue'

import { ref } from 'vue'

const collapse = ref(false)

const rootStore = useRootStore()
// 导航栏
const navis = ref(rootStore.navis)

const darkMode = ref(false)

onMounted(() => {
  // 获取DOM元素
  const sidebar = document.getElementById('sidebar')
  const toggleBtn = document.getElementById('toggle-sidebar')
  // 侧边栏折叠/展开功能
  let isCollapsed = false

  toggleBtn.addEventListener('click', function () {
    collapse.value = !collapse.value

    // 切换侧边栏宽度
    if (collapse.value) {
      sidebar.classList.remove('w-48')
      sidebar.classList.add('w-23')
      toggleBtn.innerHTML = '<i class="fa fa-angle-right text-dark-2"></i>'
    } else {
      sidebar.classList.remove('w-23')
      sidebar.classList.add('w-48')
      toggleBtn.innerHTML = '<i class="fa fa-angle-left text-dark-2"></i>'
    }
  })

  // 窗口大小响应式处理
  window.addEventListener('resize', function () {
    if (window.innerWidth < 768 && !isCollapsed) {
      // 在小屏幕上自动折叠侧边栏
      toggleBtn.click()
    }
  })

  //二级菜单展开 / 折叠功能
  const submenuToggles = document.querySelector('#global-nav').querySelectorAll('.group')

  submenuToggles.forEach((toggle) => {
    toggle.addEventListener('click', function () {
      const submenu = this.nextElementSibling
      const icon = this.querySelector('.fa-angle-down')
      if (submenu == null) return
      if (submenu.classList.contains('hidden')) {
        submenu.classList.remove('hidden')
        submenu.classList.add('slide-down')
        icon.classList.add('rotate-180')
      } else {
        submenu.classList.add('hidden')
        submenu.classList.remove('slide-down')
        icon.classList.remove('rotate-180')
      }
    })
  })
})

const toggleDarkMode = () => {
  const html = document.documentElement
  html.classList.toggle('dark')
  if (html.classList.contains('dark')) {
    darkMode.value = true
    localStorage.setItem('theme', 'dark')
  } else {
    darkMode.value = false
    localStorage.setItem('theme', 'light')
  }
}
</script>

<template>
  <!-- 左侧导航栏 -->
  <aside
    id="sidebar"
    class="bg-white h-full w-48 shadow-md z-30 relative dark:bg-gray-900 dark:text-gray-300"
  >
    <!-- 品牌Logo区域 -->
    <div
      class="flex items-center h-16 px-4 border-b border-light-2 dark:border-gray-800"
      :class="[collapse ? 'justify-center' : 'justify-between']"
    >
      <div class="flex items-center space-x-2">
        <div class="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
          <i class="fa fa-cube text-white"></i>
        </div>
        <h1
          id="brand-name"
          class="text-lg font-bold text-primary sidebar-transition"
          :class="[{ hidden: collapse }]"
        >
          AdminPro
        </h1>
      </div>
      <!-- 折叠按钮 -->
      <button
        id="toggle-sidebar"
        class="p-1 rounded-md hover:bg-light-1 dark:hover:bg-gray-700 transition-colors"
        :class="{ 'absolute right-0': collapse }"
      >
        <i class="fa fa-angle-left text-dark-2"></i>
      </button>
    </div>

    <!-- 导航菜单 -->
    <nav class="py-4 overflow-y-auto h-[calc(100%-4rem)]" id="global-nav">
      <NavItem
        v-for="nav in navis"
        :key="nav.name"
        :navi="nav"
        :collapse="collapse"
        :level="1"
      ></NavItem>
    </nav>
  </aside>

  <!-- 主内容区域 -->
  <main class="flex-1 flex flex-col overflow-hidden">
    <!-- 顶部导航栏 -->
    <header
      class="bg-white h-16 shadow-sm flex items-center justify-between px-6 z-20 dark:bg-gray-800 dark:text-gray-300"
    >
      <!-- 左侧：面包屑导航 -->
      <div id="breadcrumb" class="flex items-center text-sm">
        <BreadCrumb></BreadCrumb>
      </div>

      <!-- 右侧：用户信息和操作 -->
      <div class="flex items-center space-x-4">
        <!-- 搜索框 -->
        <div class="relative hidden md:block">
          <input
            type="text"
            placeholder="搜索..."
            class="pl-9 pr-4 py-2 rounded-md bg-light-1 dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 w-48 transition-all duration-300 focus:w-64"
          />
          <i
            class="fa fa-search absolute left-3 top-1/2 -translate-y-1/2 text-dark-2 dark:text-gray-300"
          ></i>
        </div>

        <!-- 通知 -->
        <NotifyMessage> </NotifyMessage>
        <!-- 深色/浅色模式切换 -->
        <button
          id="themeToggle"
          class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 theme-transition"
          @click="toggleDarkMode"
        >
          <i
            v-if="darkMode"
            class="fa fa-sun text-xl text-yellow-400 dark:inline theme-transition"
          ></i>
          <i v-else class="fa fa-moon text-xl text-gray-700 dark:hidden theme-transition"></i>
        </button>
        <!-- 用户头像 -->
        <UserSettings> </UserSettings>
      </div>
    </header>

    <!-- 内容区域 -->
    <Router-view class="flex-1 overflow-y-auto p-6 bg-light-1 dark:bg-gray-900" id="content-area" />
  </main>
</template>
<style></style>
