<template xmlns="">
  <el-container>
    <el-aside width="200px">
      <nav-menu/>
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>

      <el-container
          v-loading="loading"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
      >
        <router-view/>
      </el-container>
    </el-container>
  </el-container>

</template>

<script>
	import {mapState} from 'vuex'
	import navMenu from '@/components/NavMenu'
	import Header from '@/components/Header'

	export default {
		computed: {
			...mapState({
				loading: 'loading'
			})
		},
		components: {
			navMenu,
			Header
		}
	}
</script>

<style scoped lang="scss">
  .el-header {
    text-align: center;
    line-height: 60px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.06);
  }

  .el-aside {
    color: #333;
    text-align: center;
    line-height: 200px;
    min-height: 500px;
    background: rgba(23, 24, 25, 1);
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>