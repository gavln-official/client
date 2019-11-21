<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
@import '@/style/reset.scss';

#app {
  min-height: 100vh;
  background-color: #fff;
  color: #333;
  font-size: 12px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
