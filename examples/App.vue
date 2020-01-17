<template>
  <div id="app">
    
    <router-view class="center-views"/>
  </div>
</template>

<script>

export default {
  name: 'App',
 
}
</script>

<style lang="scss">
@import './assets/css/reset';
#app {
  width: 100%;
  height: 100%;
  background-color: #f7f8fa;
  .nav{
    width: 200px;
    height: calc(100% - 80px);
    display: inline-block;
    overflow-y: auto;
    vertical-align: top;
  }
  .center-views{
    display: inline-block;
    
    width: calc(100% - 243px)
  }
}
</style>
