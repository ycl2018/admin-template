<template>
  <div class="relative dark:text-gray-200" @mouseenter="show = true" @mouseleave="show = false">
    <div class="flex items-center space-x-2 cursor-pointer group">
      <img
        src="https://picsum.photos/id/1005/200/200"
        alt="用户头像"
        class="w-8 h-8 rounded-full object-cover border border-light-2"
      />
      <span class="text-sm font-medium hidden md:inline-block">管理员</span>
      <i
        class="fa fa-angle-down text-dark-2 text-xs transition-transform"
        :class="show ? 'rotate:180' : ''"
      ></i>
    </div>
    <div
      class="absolute bg-white dark:bg-gray-800 dark:text-gray-300 rounded-md w-40 dropdown-transition dropdown-shadow"
      :class="[show ? '' : 'invisible opacity-0 translate-y-2']"
    >
      <ul class="py-2">
        <li>
          <a href="#" class="dropdown-item">
            <i class="fa fa-user-circle w-5 text-center"></i>
            <span class="text-sm">个人资料</span>
          </a>
        </li>
        <li>
          <a href="#" class="dropdown-item">
            <i class="fa fa-cog w-5 text-center"></i>
            <span class="text-sm">设置</span>
          </a>
        </li>
        <li>
          <a href="#" class="dropdown-item">
            <i class="fa fa-question-circle w-5 text-center"></i>
            <span class="text-sm">帮助中心</span>
          </a>
        </li>
        <li class="border-t border-gray-100 dark:border-gray-800 mt-1 pt-1">
          <a
            href="#"
            class="block px-4 py-2.5 text-red-600 hover:bg-red-50 transition-colors flex items-center gap-3"
          >
            <i class="fa fa-sign-out w-5 text-center"></i>
            <span class="text-sm">退出登录</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>
