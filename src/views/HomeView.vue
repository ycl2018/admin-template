<template>
  <div id="dashboard" class="content-section">
    <!--工具栏-->
    <div class="flex items-center justify-between mb-6 dark:text-gray-300">
      <h1 class="font-bold text-[clamp(1.25rem,3vw,1.75rem)]">仪表盘</h1>
      <div class="flex gap-1">
        <button
          class="px-4 bg-white dark:bg-gray-700 dark:text-gray-300 py-2 border border-light-2 dark:border-gray-700 dark:hover:bg-gray-800 dark:border-gray-500 rounded-md text-sm hover:bg-light-1 dark:hover:bg-gray-800 transition-colors"
          @click="showMessage"
        >
          <i class="fa fa-download w-5 text-center mr-2"></i>
          <span>导出</span>
        </button>
        <button
          class="px-4 bg-primary text-white py-2 border border-light-2 dark:border-gray-700 dark:hover:bg-gray-800 rounded-md text-sm hover:bg-primary/80 transition-colors"
        >
          <i class="fa fa-refresh w-5 text-center mr-2"></i>
          <span>刷新</span>
        </button>
      </div>
    </div>
    <!-- 统计卡片 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div
        class="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6 border border-light-2 dark:border-gray-700 dark:hover:bg-gray-800 hover:shadow-md transition-shadow"
      >
        <div class="flex justify-between items-start">
          <div class="dark:text-gray-300">
            <p class="text-dark-2 dark:text-gray-300 text-sm mb-1">总用户数</p>
            <p class="text-2xl font-bold">12845</p>
            <p class="text-xs mt-2">
              <span class="text-success mr-2">
                <i class="fa fa-arrow-up"></i>
                5.3%
              </span>
              <span class="text-dark-2 dark:text-gray-300">较上月</span>
            </p>
          </div>
          <div
            class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"
          >
            <i class="fa fa-users"></i>
          </div>
        </div>
      </div>
      <div
        class="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6 border border-light-2 dark:border-gray-700 dark:hover:bg-gray-800 hover:shadow-md transition-shadow"
      >
        <div class="flex items-start justify-between">
          <div class="dark:text-gray-300">
            <p class="text-dark-2 dark:text-gray-300 text-sm mb-1">今日访问</p>
            <h3 class="text-2xl font-bold">3,241</h3>
            <p class="text-success text-xs mt-2 flex items-center">
              <i class="fa fa-arrow-up mr-1"></i> 8.2%
              <span class="text-dark-2 dark:text-gray-300 ml-1">较昨日</span>
            </p>
          </div>
          <div
            class="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary"
          >
            <i class="fa fa-eye"></i>
          </div>
        </div>
      </div>

      <div
        class="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6 border border-light-2 dark:border-gray-700 dark:hover:bg-gray-800 hover:shadow-md transition-shadow"
      >
        <div class="flex items-start justify-between">
          <div class="dark:text-gray-300">
            <p class="text-dark-2 dark:text-gray-300 text-sm mb-1">文章总数</p>
            <h3 class="text-2xl font-bold">5,732</h3>
            <p class="text-success text-xs mt-2 flex items-center">
              <i class="fa fa-arrow-up mr-1"></i> 5.3%
              <span class="text-dark-2 dark:text-gray-300 ml-1">较上月</span>
            </p>
          </div>
          <div
            class="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center text-success"
          >
            <i class="fa fa-file-text"></i>
          </div>
        </div>
      </div>

      <div
        class="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6 border border-light-2 dark:border-gray-700 dark:hover:bg-gray-800 hover:shadow-md transition-shadow"
      >
        <div class="flex items-start justify-between">
          <div class="dark:text-gray-300">
            <p class="text-dark-2 dark:text-gray-300 text-sm mb-1">待处理事项</p>
            <h3 class="text-2xl font-bold">24</h3>
            <p class="text-danger text-xs mt-2 flex items-center">
              <i class="fa fa-arrow-up mr-1"></i> 3.1%
              <span class="text-dark-2 dark:text-gray-300 ml-1">较昨日</span>
            </p>
          </div>
          <div
            class="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center text-warning"
          >
            <i class="fa fa-tasks"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- 图表-->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <div
        class="bg-white dark:bg-gray-700 lg:col-span-2 border border-light-2 dark:border-gray-700 dark:hover:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md"
      >
        <div class="flex justify-between items-center dark:text-gray-300">
          <h3 class="font-semibold">访问趋势</h3>
          <div class="flex justify-between gap-2">
            <p class="text-dark-2 dark:text-gray-300 bg-primary/10 px-3 py-1 rounded-md text-xs">
              日
            </p>
            <p
              class="text-dark-2 dark:text-gray-300 bg-primary/10 px-3 rounded-md py-1 rounded-md text-xs"
            >
              周
            </p>
            <p class="text-dark-2 dark:text-gray-300 bg-primary/10 px-3 py-1 rounded-md text-xs">
              月
            </p>
          </div>
        </div>
        <p
          class="text-center py-30 mt-5 bg-light-1 dark:bg-gray-900 text-dark-2 dark:text-gray-300 rounded-md"
        >
          访问趋势图表
        </p>
      </div>
      <div
        class="bg-white dark:bg-gray-700 border border-light-2 dark:border-gray-700 dark:hover:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md"
      >
        <div class="flex justify-between dark:text-gray-300">
          <h3 class="font-semibold">用户分布</h3>
          <button class="text-primary text-sm hover:underline">查看全部</button>
        </div>
        <p
          class="bg-light-1 text-dark-2 dark:text-gray-300 dark:bg-gray-900 text-center py-30 mt-5 rounded-md"
        >
          用户分布图表
        </p>
      </div>
    </div>

    <!-- 最近活动 -->
    <div
      class="bg-white dark:bg-gray-700 p-6 rounded-lg border border-light-1 dark:border-gray-700 shadow-xs hover:shadow-md"
    >
      <div class="flex justify-between dark:text-gray-300">
        <h2 class="font-bold">最近活动</h2>
        <button class="text-primary text-sm hover:underline">查看全部</button>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-light-2 dark:divide-gray-600 mt-2">
          <thead>
            <tr>
              <th
                class="px-4 py-3 text-left text-xs font-medium text-dark-2 dark:text-gray-300 uppercase tracking-wider"
              >
                用户
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-medium text-dark-2 dark:text-gray-300 uppercase tracking-wider"
              >
                操作
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-medium text-dark-2 dark:text-gray-300 uppercase tracking-wider"
              >
                时间
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-medium text-dark-2 dark:text-gray-300 uppercase tracking-wider"
              >
                状态
              </th>
            </tr>
          </thead>
          <tbody
            class="bg-white dark:bg-gray-700 divide-y divide-light-2 dark:divide-gray-600 dark:text-gray-300"
          >
            <tr class="hover:bg-light-1/50 dark:hover:bg-gray-600 transition-colors">
              <td class="px-4 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <img
                    src="https://picsum.photos/id/1012/200/200"
                    alt="用户头像"
                    class="w-8 h-8 rounded-full mr-3"
                  />
                  <div>
                    <div class="text-sm font-medium">张三</div>
                    <div class="text-xs text-dark-2 dark:text-gray-300">普通用户</div>
                  </div>
                </div>
              </td>
              <td class="px-4 py-4 whitespace-nowrap text-sm">发布了新文章</td>
              <td class="px-4 py-4 whitespace-nowrap text-sm text-dark-2 dark:text-gray-300">
                今天 09:45
              </td>
              <td class="px-4 py-4 whitespace-nowrap">
                <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success"
                  >已通过</span
                >
              </td>
            </tr>
            <tr class="hover:bg-light-1/50 dark:hover:bg-gray-600 transition-colors">
              <td class="px-4 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <img
                    src="https://picsum.photos/id/1027/200/200"
                    alt="用户头像"
                    class="w-8 h-8 rounded-full mr-3"
                  />
                  <div>
                    <div class="text-sm font-medium">李四</div>
                    <div class="text-xs text-dark-2 dark:text-gray-300">VIP用户</div>
                  </div>
                </div>
              </td>
              <td class="px-4 py-4 whitespace-nowrap text-sm">提交了评论</td>
              <td class="px-4 py-4 whitespace-nowrap text-sm text-dark-2 dark:text-gray-300">
                昨天 16:20
              </td>
              <td class="px-4 py-4 whitespace-nowrap">
                <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success"
                  >已通过</span
                >
              </td>
            </tr>
            <tr class="hover:bg-light-1/50 dark:hover:bg-gray-600 transition-colors">
              <td class="px-4 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <img
                    src="https://picsum.photos/id/1025/200/200"
                    alt="用户头像"
                    class="w-8 h-8 rounded-full mr-3"
                  />
                  <div>
                    <div class="text-sm font-medium">王五</div>
                    <div class="text-xs text-dark-2 dark:text-gray-300">普通用户</div>
                  </div>
                </div>
              </td>
              <td class="px-4 py-4 whitespace-nowrap text-sm">修改了个人资料</td>
              <td class="px-4 py-4 whitespace-nowrap text-sm text-dark-2 dark:text-gray-300">
                前天 11:30
              </td>
              <td class="px-4 py-4 whitespace-nowrap">
                <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success"
                  >已完成</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style></style>

<script setup>
import { onMounted } from 'vue'

const showMessage = () => {
  alert('暂未实现')
}

onMounted(() => {})
</script>
