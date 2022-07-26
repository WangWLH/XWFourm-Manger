<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload() {
      let _this = this;
      _this.isRouterAlive = false;
      _this.$nextTick(() => {
        _this.isRouterAlive = true;
      })
    }
  }
}
</script>
<style lang="scss">
html,
body,
#app,
.el-container {
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}
</style>
