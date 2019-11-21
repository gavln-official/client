<template>
  <el-header class="header">
    <div class="header-left">
      <i class="el-icon-back" @click="$router.go(-1)"></i>
      <i class="el-icon-right"></i>
    </div>

    <div class="header-right">
      <el-avatar fit="cover">
        <img src="../assets/pepple.jpg" />
      </el-avatar>
      <span>猪猪</span>
      <router-link to="/login">
        <i class="el-icon-key"></i>
      </router-link>
    </div>
  </el-header>
</template>

<script>
// import loginApi from '@/api/login'
export default {
  name: 'Header',
  mounted() {
    // loginApi.getUseInfo().then(res => {
    //   console.log(res)
    // })
  },
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);

  .header-left {
    width: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .el-icon-back,
    .el-icon-right {
      font-size: 20px;
    }
  }

  .header-right {
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .el-icon-key {
      font-size: 20px;
    }
  }
}
</style>
