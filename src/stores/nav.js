import { defineStore } from 'pinia'

export const useRootStore = defineStore('root', {
  state: () => ({
    navis: [
      {
        name: '主页',
        path: '/',
        icon: 'fa fa-house',
      },
      {
        name: '多级菜单',
        icon: 'fa fa-folder',
        chidrens: [
          {
            name: '二级菜单',
            // path: '/items',
            icon: 'fa fa-circle-info',
            chidrens: [
              {
                name: '三级菜单',
                path: '/items',
                icon: 'fa fa-circle-info',
              },
            ],
          },
        ],
      },
      {
        name: '系统设置',
        path: '/',
        icon: 'fa fa-gear',
      },
    ],
  }),
})
