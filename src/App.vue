<template>
  <transition name="fade" mode="out-in">
    <keep-alive>
      <div id="app">
        <router-view/>
      </div>
    </keep-alive>

  </transition>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  mounted(){

  }
}
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
