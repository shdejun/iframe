<template>
  <div >
    <van-action-sheet
      id="selectProvince"
      get-container="body"
      v-model="visible"
      @click-overlay="clickOverlay"
      :round="false"
    >
    <div class="first-word-wraps">
      <div class="first-word">
        <div 
          @click="selectFirstWord"
          class="word" 
          v-for="(province,index) in provinceLine1" 
          :key="index"
          @touchstart="startTouch(index,1)"
          @touchend="endTouch(index,1)"
        >
          <span :class="{'active':isActiveLine1==index}" >{{province}}</span>
        </div>
      </div>

      <div class="first-word">
        <div 
        @click="selectFirstWord"
          class="word"
          v-for="(province,index) in provinceLine2" 
          :key="index"
          @touchstart="startTouch(index,2)"
          @touchend="endTouch(index,2)"
          >
          <span :class="{'active':isActiveLine2==index}">
            {{province}}
          </span>
        </div>
      </div>

      <div class="first-word">
        <div 
          @click="selectFirstWord"
          class="word"
          v-for="(province,index) in provinceLine3" 
          :key="index"
          @touchstart="startTouch(index,3)"
          @touchend="endTouch(index,3)"
          >
          <span :class="{'active':isActiveLine3==index}">
            {{province}}
          </span>
        </div>
      </div>

        <div class="first-word">
          <div 
          @click="selectFirstWord"
          class="word last-line"
          v-for="(province,index) in provinceLine4" 
          :key="index"
          @touchstart="startTouch(index,4)"
          @touchend="endTouch(index,4)"
          >
          <span :class="{'active':isActiveLine4==index}">
            {{province}}
          </span>
        </div>
        </div>
      </div>
    </van-action-sheet>
  </div>
 
</template>
<script>
export default {
  name: "selectProvince",
  props: {},
  data() {
    return {
      visible:true,
      provinceLine1:['京','湘','津','鄂','沪','粤','渝','琼'],
      isActiveLine1:null,
      provinceLine2:['翼','川','晋','贵','辽','云','吉','陕'],
      isActiveLine2:null,
      provinceLine3:['黑','甘','苏','青','浙','皖','藏','闽'],
      isActiveLine3:null,
      provinceLine4:['蒙','赣','桂','鲁','宁','豫','新'],
      isActiveLine4:null
    };
  },
 
  methods: {
    selectFirstWord(e){
      this.visible = false;
      this.$emit('onWord',e.target.innerText)
    },
    startTouch(e,cont){
      this._data['isActiveLine'+cont] = e
    },
    endTouch(e,cont){
      this._data['isActiveLine'+cont]  = 'cancel'
    },
    //遮罩层点击事件
    clickOverlay(){
      this.$emit('onWord')
    }
  }
};
</script>
<style lang="scss">
#selectProvince {
 .first-word-wraps {
  // height: 9.4rem;
  background-color: #D2D5DB;
  padding: 0.1667rem;
  .first-word {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.45rem;
    .word {
      box-sizing: border-box;
      width: 1.2rem;
      height: 1.2rem;
      color: #000;
      font-weight: bold;
      // border: 1px solid #9cbce2;
      box-shadow: 0px 1px 4px  rgba(0, 0, 0, 0.35);
      border-radius: 0.16rem;
      text-align: center;
      span {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        background-color: #fff;
        color: #000;
        // border: 1px solid #fff;
        border-radius: 0.125rem;
      }
      .active{
        background-color: #dedede;
      }
    }
    
    .last-line{
      width: 1.4rem;
      height: 1.2rem;
    }
    &:nth-last-of-type(1){
      margin-bottom: 0rem;
    }
  }
}
}
</style>