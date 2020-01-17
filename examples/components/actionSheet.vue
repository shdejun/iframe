<template>
  <div>
    <yj-button @click.native="handlerActionSheet" type="primary" >弹出菜单</yj-button>
    <action-sheet v-model="show" :title="title" @onSelected="onSelected"></action-sheet>
  </div>
</template>

<script>

export default {
  data(){
     return{
       show:false,
       title:'标题'
     }
  },
  methods:{
    handlerActionSheet(){
      this.show = !this.show
    },
    onSelected(item){
      alert(item.name)
    }
  }
}
</script>

<style lang="scss">

</style>
