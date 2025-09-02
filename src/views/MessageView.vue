<template>
  <div class="flex flex-col justify-center">
    <button
      class="p-2 relative rounded-full hover:bg-light-1 dark:hover:bg-gray-700 transition-colors"
      @click="show = !show"
    >
      <i class="fa-regular fa-bell text-dark-2 dark:text-gray-300"></i>
      <span v-if="hasNotify" class="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full"></span>
    </button>
    <div
      class="h-[calc(100%-5rem)] mx-auto top-[4.5rem] right-3 absolute bg-white/10 dark:bg-gray-800/70 backdrop-blur-lg p-6 rounded-xl w-[90vw] md:w-[400px] lg:w-[500px] shadow-lg z-50 transition-transform duration-300 ease-in-out overflow-y-auto overflow-x-hidden"
      :class="[show ? '' : 'translate-x-full opacity-0 ']"
      ref="popupRef"
    >
      <h2 class="text-[clamp(1.5rem,3vw,2rem)] font-bold text-gray-800 mb-6 dark:text-gray-300">
        消息通知中心
      </h2>
      <!-- 全部已读 -->
      <div class="text-sm text-gray-500 mb-4 text-right mr-2 dark:text-gray-300" v-if="hasNotify">
        <button class="hover:underline" @click="clearAll">全部已读</button>
      </div>
      <!-- 信息通知 -->
      <div
        class="bg-white dark:bg-gray-900 rounded-xl p-5 mb-4 notification-shadow notification-hover dark:text-gray-300"
      >
        <div class="flex items-start">
          <!-- 图标 -->
          <div
            class="flex-shrink-0 w-10 h-10 rounded-full bg-info/10 flex items-center justify-center mr-4"
          >
            <i class="fa fa-info text-info text-xl"></i>
          </div>

          <!-- 内容 -->
          <div class="flex-grow">
            <div class="flex justify-between items-start">
              <h3 class="font-semibold text-gray-800 dark:text-gray-300">系统通知</h3>
              <span class="text-xs text-gray-500">10分钟前</span>
            </div>
            <p class="text-gray-600 mt-1 dark:text-gray-400">
              您的账户已成功升级为高级会员，将享受更多专属权益。
            </p>

            <!-- 操作按钮 -->
            <div class="mt-4 flex space-x-3">
              <button class="text-sm text-info hover:text-info/80 font-medium transition-colors">
                了解详情
              </button>
              <button class="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                忽略
              </button>
            </div>
          </div>

          <!-- 关闭按钮 -->
          <button
            class="flex-shrink-0 ml-4 text-gray-400 hover:text-gray-600 dark:text-gray-400 transition-colors"
          >
            <i class="fa fa-times"></i>
          </button>
        </div>
      </div>

      <!-- 成功通知 -->
      <div
        class="bg-white dark:bg-gray-900 rounded-xl p-5 mb-4 notification-shadow notification-hover border-l-4 border-success"
      >
        <div class="flex items-start">
          <!-- 图标 -->
          <div
            class="flex-shrink-0 w-10 h-10 rounded-full bg-success/10 flex items-center justify-center mr-4"
          >
            <i class="fa fa-check text-success text-xl"></i>
          </div>

          <!-- 内容 -->
          <div class="flex-grow">
            <div class="flex justify-between items-start">
              <h3 class="font-semibold text-gray-800 dark:text-gray-300">操作成功</h3>
              <span class="text-xs text-gray-500">1小时前</span>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mt-1">
              您提交的表单已成功处理，我们将尽快与您联系。
            </p>
          </div>

          <!-- 关闭按钮 -->
          <button
            class="flex-shrink-0 ml-4 text-gray-400 hover:text-gray-600 dark:text-gray-400 transition-colors"
          >
            <i class="fa fa-times"></i>
          </button>
        </div>
      </div>

      <!-- 警告通知 -->
      <div
        class="bg-white dark:bg-gray-900 rounded-xl p-5 mb-4 notification-shadow notification-hover border-l-4 border-warning"
      >
        <div class="flex items-start">
          <!-- 图标 -->
          <div
            class="flex-shrink-0 w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center mr-4"
          >
            <i class="fa fa-exclamation-triangle text-warning text-xl"></i>
          </div>

          <!-- 内容 -->
          <div class="flex-grow">
            <div class="flex justify-between items-start">
              <h3 class="font-semibold text-gray-800 dark:text-gray-300">注意事项</h3>
              <span class="text-xs text-gray-500">3小时前</span>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mt-1">
              您的会员积分将在3天后过期，请及时使用。
            </p>

            <!-- 操作按钮 -->
            <div class="mt-4">
              <button
                class="px-4 py-1.5 bg-warning text-white text-sm rounded-lg hover:bg-warning/90 transition-colors"
              >
                立即使用
              </button>
            </div>
          </div>

          <!-- 关闭按钮 -->
          <button
            class="flex-shrink-0 ml-4 text-gray-400 hover:text-gray-600 dark:text-gray-400 transition-colors"
          >
            <i class="fa fa-times"></i>
          </button>
        </div>
      </div>

      <!-- 错误通知 -->
      <div
        class="bg-white dark:bg-gray-900 rounded-xl p-5 mb-4 notification-shadow notification-hover"
      >
        <div class="flex items-start">
          <!-- 图标 -->
          <div
            class="flex-shrink-0 w-10 h-10 rounded-full bg-danger/10 flex items-center justify-center mr-4"
          >
            <i class="fa fa-exclamation-circle text-danger text-xl"></i>
          </div>

          <!-- 内容 -->
          <div class="flex-grow">
            <div class="flex justify-between items-start">
              <h3 class="font-semibold text-gray-800 dark:text-gray-300">操作失败</h3>
              <span class="text-xs text-gray-500">5小时前</span>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mt-1">
              文件上传失败，请检查网络连接后重试。
            </p>

            <!-- 操作按钮 -->
            <div class="mt-4 flex space-x-3">
              <button
                class="px-4 py-1.5 bg-danger text-white text-sm rounded-lg hover:bg-danger/90 transition-colors"
              >
                重试
              </button>
              <button
                class="px-4 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors"
              >
                查看帮助
              </button>
            </div>
          </div>

          <!-- 关闭按钮 -->
          <button
            class="flex-shrink-0 ml-4 text-gray-400 hover:text-gray-600 dark:text-gray-400 transition-colors"
          >
            <i class="fa fa-times"></i>
          </button>
        </div>
      </div>

      <!-- 带图片的通知 -->
      <div class="bg-white dark:bg-gray-900 rounded-xl p-5 notification-shadow notification-hover">
        <div class="flex items-start">
          <!-- 图片 -->
          <img
            src="https://picsum.photos/200/200?random=1"
            alt="产品图片"
            class="w-16 h-16 rounded-lg object-cover mr-4 flex-shrink-0"
          />

          <!-- 内容 -->
          <div class="flex-grow">
            <div class="flex justify-between items-start">
              <h3 class="font-semibold text-gray-800 dark:text-gray-300">产品更新</h3>
              <span class="text-xs text-gray-500">昨天</span>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mt-1">
              您关注的产品"无线蓝牙耳机"已推出新版本，点击查看详情。
            </p>

            <!-- 操作按钮 -->
            <div class="mt-4">
              <button
                class="text-sm text-primary hover:text-primary/80 font-medium transition-colors flex items-center"
              >
                查看更新 <i class="fa fa-arrow-right ml-1 text-xs"></i>
              </button>
            </div>
          </div>

          <!-- 关闭按钮 -->
          <button
            class="flex-shrink-0 ml-4 text-gray-400 hover:text-gray-600 dark:text-gray-400 transition-colors"
          >
            <i class="fa fa-times"></i>
          </button>
        </div>
      </div>

      <div class="text-center text-sm text-gray-500 dark:text-gray-300 mt-4">没有更多通知了</div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const show = ref(false)
const hasNotify = ref(true)

// 获取弹窗DOM元素
const popupRef = ref(null)

// 清除所有通知
const clearAll = () => {
  if (popupRef.value) {
    const allCards = popupRef.value.querySelectorAll('.notification-shadow')
    for (let i = 0; i < allCards.length; i++) {
      setTimeout(() => {
        allCards[i].classList.add('opacity-0', 'transform', 'translate-x-full')
        allCards[i].style.transiton = 'all 0.3s ease-in-out'
        setTimeout(() => {
          allCards[i].remove()
        }, 400)
      }, i * 50)
    }
    hasNotify.value = false
  }
}

onMounted(() => {
  // 关闭单个通知
  if (popupRef.value) {
    popupRef.value.querySelectorAll('.fa-times').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const card = e.target.closest('.notification-shadow')
        if (card) {
          card.classList.add('opacity-0', 'transform', 'translate-x-full')
          card.style.transiton = 'all 0.3s ease-in-out'
          setTimeout(() => {
            card.remove()
          }, 400)
        }
      })
    })
  }
  // 点击弹窗外部区域关闭弹窗
  document.addEventListener('click', (e) => {
    if (
      show.value &&
      popupRef.value &&
      !popupRef.value.contains(e.target) &&
      !e.target.closest('button')
    ) {
      show.value = false
    }
  })
})
</script>
