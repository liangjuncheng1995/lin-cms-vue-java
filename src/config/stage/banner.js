const bannerRouter = {
  route: null,
  name: null,
  title: 'Banner管理',
  type: 'folder', // 类型: folder(目录), tab(可以参考分组管理), view
  icon: 'iconfont icon-tushuguanli',
  filePath: 'view/banner/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: 'Banner列表',
      type: 'view',
      name: 'BannerList',
      route: '/banner/list',
      filePath: 'view/banner/banner-list.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '添加Banner',
      type: 'view',
      name: 'BannerCreate',
      route: '/banner/add',
      filePath: 'view/banner/banner-add.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
  ],
}

export default bannerRouter
