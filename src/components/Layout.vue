<template>
  <div class="layout">
    <MenuAside style="width: 200px" />
    <el-container class="main-container">
      <Header />
      <el-container
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
      >
        <router-view />
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/Header'
import MenuAside from '@/components/MenuAside'

export default {
  name: 'Layout',
  components: {
    MenuAside,
    Header,
  },
  computed: {
    ...mapState({
      loading: 'loading',
    }),
  },
}
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  min-height: 100vh;

  .main-container {
    flex: auto;
  }
}
</style>
