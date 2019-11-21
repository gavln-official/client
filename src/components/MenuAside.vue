<template>
  <el-aside class="menu-aside">
    <h3 class="aside-title">Gavln</h3>
    <el-menu
      mode="horizontal"
      active-text-color="#ffffff"
      :router="true"
      :default-active="$route.path"
      style="border-bottom: 0"
    >
      <el-menu-item
        v-for="(item, index) in menuList"
        :key="index"
        :index="item['path']"
        class="menu-aside-item"
      >
        <i :class="item['class']"></i>
        <span>{{ item['name'] }}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'MenuAside',
  data() {
    return {
      menuList: [
        {
          name: '全部文件',
          path: '/all/allFile',
          class: 'el-icon-notebook-2',
        },
        {
          name: '我的收藏',
          path: '/collection/collection',
          class: 'el-icon-star-off',
        },
        {
          name: '正在上传',
          path: '/uploading/upload',
          class: 'el-icon-upload',
        },
        {
          name: '正在下载',
          path: '/downloading/download',
          class: 'el-icon-download',
        },
        {
          name: '传输完成',
          path: '/transmission/transmission',
          class: 'el-icon-s-promotion',
        },
        {
          name: '我的分享',
          path: '/myShare/share',
          class: 'el-icon-share',
        },
        {
          name: '回收站',
          path: '/recycle/recycle',
          class: 'el-icon-delete',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.menu-aside {
  min-height: 100vh;
  background-color: #171819;
  text-align: center;

  .aside-title {
    padding: 13px;
    line-height: 22px;
    color: #ffffff;
  }

  li.menu-aside-item {
    width: 100%;
    border-bottom: 0;
    background-color: #171819;

    &:hover {
      background-color: #252627;
      color: #ffffff;
    }
  }
}
</style>
