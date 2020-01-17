<template>
  <button class="yj-button yj-button-normal" :class="[type?`yj-button-${type}`:`yj-button-default`,{'yj-button--plain':plain}]">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name:'yjButton',
  props:{
    type:{
      type:String,
      default:'default'
    },
    plain:{
      type:Boolean,
      default:false
    }
  }
}
</script>
<style lang="scss">
.yj-button{
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    height: 44px;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 42px;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;
    -webkit-transition: opacity 0.2s;
    transition: opacity 0.2s;
    -webkit-appearance: none;
    -webkit-text-size-adjust: 100%;
}
.yj-button::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: #000;
    border: inherit;
    border-color: #000;
    border-radius: inherit;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
    content: ' ';
}
.yj-button-normal{
  padding: 0 15px;
  font-size: 14px;
}
.yj-button-default {
    color: #323233;
    background-color: #fff;
    border: 1px solid #ebedf0;
}
.yj-button-primary {
    color: #fff;
    background-color: #07c160;
    border: 1px solid #07c160;
}
.yj-button-info {
    color: #fff;
    background-color: #1989fa;
    border: 1px solid #1989fa;
}
.yj-button-danger {
    color: #fff;
    background-color: #ee0a24;
    border: 1px solid #ee0a24;
}
.yj-button-warning{
    color: #fff;
    background-color: #ff976a;
    border: 1px solid #ff976a;
}
.yj-button--plain {
    background-color: #fff;
    &.yj-button-default {
      color: #323233;
      background-color: #fff;
      border: 1px solid #ebedf0;
    }
    &.yj-button-primary {
        color: #07c160;
        background-color: #fff;
        border: 1px solid #07c160;
    }
    &.yj-button-info {
        color: #1989fa;
        background-color: #fff;
        border: 1px solid #1989fa;
    }
    &.yj-button-danger {
        color: #ee0a24;
        background-color: #fff;
        border: 1px solid #ee0a24;
    }
    &.yj-button-warning{
      color:  #ff976a;
      background-color:  #fff;
      border: 1px solid #ff976a;
  }
    
}
</style>