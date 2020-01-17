<template>
  <div>
    <van-action-sheet
      class="number-and-english"
      get-container="body"
      v-model="visible"
      :overlay="false"
      :round="false"
    >
    <div class="first-word-wrap">
      <div class="number-list" >
        <div class="num-eng-item" 
          :class="{'disable-item':isFristWord,'active':isActiveLine1==index&&!isFristWord}" 
          v-for="(item,index) in allKeyWord._1" :key="index" 
          @touchstart="startTouch(index,1)"
          @touchend="endTouch(index,1)"
          @click="selectWrod($event,'num')">
            {{item}}
          </div>
      </div>
      <div class="english-list" >
        <div class="english-cell">
          <div class="num-eng-item" 
            :class="{'disable-item':!isFristWord&&(item=='O'||item=='I'),'active':isActiveLine2==index}" 
            @touchstart="startTouch(index,2)"
            @touchend="endTouch(index,2)"
            v-for="(item,index) in allKeyWord._2" :key="index" 
            @click="selectWrod($event,item)"
            >
          {{item}}
          </div>
        </div>
        <div class="english-cell pad-x-10">
          <div class="num-eng-item" 
            :class="{'active':isActiveLine3==index}" 
            @touchstart="startTouch(index,3)"
            @touchend="endTouch(index,3)"
            v-for="(item,index) in allKeyWord._3" :key="index" 
            @click="selectWrod">{{item}}</div>
        </div>
        <div class="english-cell">
          <div class="num-eng-item" :class="!isNeedCase?'disable-item':''"  @click="toggleCase" >
            <van-icon name="upgrade" />
          </div>
          <div class="num-eng-item" 
            :class="{'active':isActiveLine4==index}" 
            @touchstart="startTouch(index,4)"
            @touchend="endTouch(index,4)"
            v-for="(item,index) in allKeyWord._4" :key="index" 
            @click="selectWrod">{{item}}</div>
          <div class="num-eng-item"  
          :class="{'active':isActiveLine5=='delete'}" 
          @touchstart="startTouch('delete',5)"
            @touchend="endTouch('delete',5)"
          @click="delLastWord">
            <van-icon name="close" />
          </div>
        </div>
      </div>
    </div>
    </van-action-sheet>

  </div>
</template>
<script>
export default {
  name: "numberAndEnglish",
  props: {
    // 是否为第一字
    isFristWord:{
      type:Boolean,
      default:false
    },
    //大小写
    isNeedCase:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
       allKeyWord: {
        _1: [1, 2, 3, 4, 5, 6, 7,8, 9, 0],
        _2: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U','I', 'O', 'P'],
        _3: [ 'A', 'S', 'D', 'F','G', 'H', 'J','K', 'L'],
        _4: [  'Z','X', 'C', 'V', 'B','N','M'],
      },
      isCase:true,
      exportWord:'',
      visible:true,
      isNumber:true,
      isActiveLine1:null,
      isActiveLine2:null,
      isActiveLine3:null,
      isActiveLine4:null,
      isActiveLine5:null
    };
  },
  computed: {
  },
 
  methods: {
    //大小写转换
    toggleCase(){
      if(!this.isNeedCase)return;
      if(this.isCase){
        for(var key in this.allKeyWord){
          if(key!='_1'){
            this.$set(this.allKeyWord,key,this.allKeyWord[key].join(',').toLowerCase().split(','))
          }
        }
        this.isCase = false
      }else{
        for(var key in this.allKeyWord){
          if(key!='_1'){
            this.$set(this.allKeyWord,key,this.allKeyWord[key].join(',').toUpperCase().split(','))
          }
        }
        this.isCase = true
      }
    },
    selectWrod(e,num){
      //禁止I,O字幕
      if((num=='num'&&this.isFristWord)||(!this.isFristWord&&(num=='O'||num=='I')))return;
      this.$emit('onWord',e.target.innerText)
    },
    delLastWord(){
      this.$emit('onDelete')
    },
    startTouch(e,cont){
      this._data['isActiveLine'+cont] = e
    },
    endTouch(e,cont){
      this._data['isActiveLine'+cont]  = 'cancel'
    }
  }
};
</script>
<style lang="scss">
.number-and-english {
 .first-word-wrap {
  // height: 9.4rem;
  background-color: #D2D5DB;
  padding: 0.1667rem;
  .num-eng-item{
    flex: 1;
    width: 1.2rem;
    height: 1.2rem;
    color: #000;
    font-weight: bold;
    box-shadow: 0px 1px 4px  rgba(0, 0, 0, 0.35);
    margin:0.1667rem;
    background-color: #fff;
    border-radius: 0.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
   .active{
    background-color: #dedede;
  }
  .disable-item{
    color: #dedede;
  }
  .number-list{
    display: flex;
  }
  .english-list{
    .english-cell{
      display: flex;
    }
  }
  }
  
}
</style>