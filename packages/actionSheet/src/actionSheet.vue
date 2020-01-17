<template>
  <div class="actionSheet" v-if="show">
    <div class="yj-overlayer" @click="closeMask"></div>
     <div class="action-sheet-box">
       <div class="action-sheet-title">
         <slot name="title">
           <div>{{title}}</div>
         </slot>
       </div>
       <div class="action-sheet-innner" v-for="(item,index) in actions" :key="index" @click="selectItem(item)">
         <div>{{item.name}}</div>
       </div>
     </div>
  </div>
</template>
<script>
export default {
  name:'actionSheet',
  props:{
    show:{
      type:Boolean,
      default:false
    },
    //标题
    title:{
      type:String,
      default:''
    },
    actions:{
      type:Array,
      default:()=>[
        {name:'选项一'},
        {name:'选项二'}
      ]
    }
  },
  model:{
    prop:'show',
    event:'onShow'
  },
  mounted(){
    console.log(this.title,'title111')
  },
  methods:{
    closeMask(){
      this.$emit('onShow',false)
    },
    selectItem(item){
      this.$emit('onSelected',item)
      this.$emit('onShow',false);
    }
  }
}
</script>
<style lang="scss">
.actionSheet{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .yj-overlayer{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .action-sheet-box{
    position: fixed;
    background-color: #fff;
    border-radius: 20px 20px 0 0;
    width: 100%;
    bottom:0;
    left: 0;
    //标题
    .action-sheet-title{
      min-height: 40px;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    //内容区
    .action-sheet-innner{
      min-height: 50px;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>