<template>
  <div>
    <h3 class="appName">Gavln</h3>
    <el-menu
        @select="handleSelect"
        active-text-color="#ffffff"
        background-color="rgba(23,24,25,1)"
        class="el-menu-demo"
        mode="horizontal"
        text-color="#fff"
    >
      <el-menu-item index="/all/allFile">
        <i class="el-icon-s-home"></i>
        <span>全部文件</span>
      </el-menu-item>

      <el-menu-item index="/collection/collection">
        <i class="el-icon-star-on"></i>
        <span>我的收藏</span>
      </el-menu-item>
      <el-menu-item index="/uploading/upload">
        <i class="el-icon-upload"></i>
        <span>正在上传</span>
      </el-menu-item>
      <el-menu-item index="/downloading/download">
        <i class="el-icon-download"></i>
        <span>正在下载</span>
      </el-menu-item>
      <el-menu-item index="/transmission/transmission">
        <i class="el-icon-s-promotion"></i>
        <span>传输完成</span>
      </el-menu-item>
      <el-menu-item index="/myShare/share">
        <i class="el-icon-share"></i>
        <span>我的分享</span>
      </el-menu-item>
      <el-menu-item index="/recycle/recycle">
        <i class="el-icon-delete"></i>
        <span>回收站</span>
      </el-menu-item>
    </el-menu>
  </div>

</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			handleSelect(key) {
				this.$router.push(key)
			}
		}

	}
</script>

<style scoped lang="scss">
  .el-menu-item {
    width: 100%;
  }
  .appName {
    line-height: 22px;
    color: white;
    margin: 0;
    padding: 13px;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
</style>