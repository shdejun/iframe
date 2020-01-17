<template>
  <div>
    <div class="demon-item">
      <h2 class="demon-item-title">按钮类型</h2>
      <yj-button>默认按钮</yj-button>
      <yj-button type="primary">默认按钮</yj-button>
      <yj-button type="info">信息按钮</yj-button>
      <yj-button type="danger">危险按钮</yj-button>
      <yj-button type="warning">警告按钮</yj-button>
      <yj-button plain type="warning">警告按钮</yj-button>
    </div>
    <div class="demon-item">
      <h2 class="demon-item-title">朴素按钮</h2>
      <yj-button plain>默认按钮</yj-button>
      <yj-button type="primary" plain>默认按钮</yj-button>
      <yj-button type="info" plain>信息按钮</yj-button>
      <yj-button type="danger" plain>危险按钮</yj-button>
      <yj-button plain type="warning">警告按钮</yj-button>
    </div>
  </div>
</template>

<script>

export default {
  data(){
     return{
      
     }
  },
  methods:{
    
  }
}
</script>

<style lang="scss">

</style>
