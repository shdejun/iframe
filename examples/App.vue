<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
 
}
</script>

<style lang="scss">
@import './assets/css/reset';
@import './assets/css/common';
#app {
  width: 100%;
  height: 100%;
  background-color: #f7f8fa;
  padding: 20px 10px;
}
</style>
