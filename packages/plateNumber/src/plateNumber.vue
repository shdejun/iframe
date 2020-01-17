<template>
  <div id="plateNumber">
    <div class="plate-number-title">车牌号码</div>
    <div class="num0 media-middle mg-right-10" @click="clickFirstWrap">
        <span>{{formData.num0}}</span>
        <!-- <van-icon :name="!isProvince?'arrow-down':'arrow-up'" /> -->
    </div>
    <em class="spot"></em>
    <button class="plate-number-center media-middle" type="default" size="mini" @focus="isShowNumEng=true">
      <div class="plate-number-inner" :class="{'is-border-show':!isShowNumEng,'error-hint':error}" @click="isShowNumEng=true">
        {{formData.num2}}
      </div>
    </button>
    <div class="special-title">
      {{getSpecialNum(formData.num3)}}
    </div>
    <div class="special-plate media-middle" >
        <span class="special-plate-inner">
          <span class="media-middle" @click="clickSpecialWrap">{{formData.num3}}</span>
          <!-- <van-icon class="media-middle" :name="isSpecial?'arrow-up':'arrow-down'" /> -->
        </span>
    </div>
    <div>

    </div>
    <!-- 省份 -->
    <select-province v-if="isProvince" @onWord="getProvince"/>
    <!-- 车牌具体文字 -->
    <number-and-english ref="numEngs" v-if="isShowNumEng" :isFristWord="formData.num2.length==0?true:false" @onWord="onWord" @onDelete="onDelete"/>
    <!-- 特殊选择 -->
    <special-plate v-if="isSpecial" @onCancel="onCancelSpecial" @onSelect="onSelectSpecial"/>
  </div>
</template>
<script>
import selectProvince from '../components/selectProvince';
import numberAndEnglish from '../components/numberAndEnglish';
import specialPlate from '../components/specialPlate'
export default {
  name: "plate-number",
  props:{
    error:{
      type:Boolean,
      default:false
    }
  },
  model: {
    prop: 'error',
    event: 'returnError'
  },
  data() {
    return {
      isProvince:false,
      isShowNumEng:true,
      isSpecial:false,
      isPreventBlur:false,
      formData:{
        num0: '湘',
        num2: '',
        num3:'小车'
      },
    }
  },
  components: {
    numberAndEnglish,
    selectProvince,
    specialPlate
  },
  
  methods: {
    //选择省份
    clickFirstWrap(){
      this.isProvince = !this.isProvince;
    },
    getProvince(e){
      this.isProvince = false
      if(!e)return
      this.$set(this.formData,'num0',e);
    },

    //选择具体车牌
    onWord(e){
      this.$emit('returnError',false)
      if(this.formData.num2.length>7){
        return
      }
      this.$set(this.formData,'num2',this.formData.num2 + e);
    },
    onDelete(e){
      this.$emit('returnError',false)
      this.$set(this.formData,'num2',this.formData.num2.substring(0,this.formData.num2.length-1));
    },

    //特殊字段click
    clickSpecialWrap(){
      this.isSpecial = true
    },
    onCancelSpecial(){
      this.isSpecial = false
    },
    onSelectSpecial(e){
      this.isSpecial = false
      if((e.name=='香港'||e.name=='澳门')&&this.formData.num2.length<=1){
        this.$set(this.formData,'num0','粤');
        this.$set(this.formData,'num2','Z');
      }
      this.$set(this.formData,'num3',e.name);
    },
    getSpecialNum(word){
      let resWord = ''
      switch(word){
        case '小车':
          resWord = ''
        break
        case '大车':
          resWord = ''
        break
        case '教练':
          resWord = '学'
        break
        case '香港':
          resWord = '港'
        break
        case '澳门':
          resWord = '澳'
        break
      }
      return resWord
    }
  },
  mounted(){
    
    document.body.addEventListener('click',(e)=>{
      let className = e.target.className;
      let classArr = [
        'num-eng-item','num-eng-item disable-item','number-and-english','van-icon van-icon-close',
        'van-icon van-icon-upgrade','plate-number-center media-middle','plate-number-inner','first-word-wrap']
      
      if(classArr.indexOf(className)!=-1){
        this.isShowNumEng = true
      }else{
        this.isShowNumEng = false
        console.log(e,'false')
      }
    })
  },
  watch:{
    formData:{
      handler(n,o){
        let plateNumber = n.num0 + n.num2 + this.getSpecialNum(n.num3);
        this.$emit('onExportPlateNumber',plateNumber)
      },
      deep:true
    }
  },
  destroyed(){
    document.removeEventListener('click')
  }
};
</script>
<style lang="scss">
body{
  // z-index: 9999999;
  cursor: pointer;
}
#plateNumber{
  display: flex;
  align-items: center;
  height: 50px;
  font-size: 14px;
  padding: 0 20px;
  background-color: #fff;
  .special-title{
    color: #000;
    font-weight: bold;
  }
  .plate-number-title{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    color: #000;
    font-weight: bold;
  }
  .num0{
    width: 25px;
    height: 25px;
    background-color: #3574F7;
    color: #fff;
    border-radius: 4px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .plate-number-center{
    width: 130px;
    height: 20px;
    display: flex;
    align-items: center;
    background-color: #fff;
    position: relative;
    &:after {
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-top: 1px solid #dedede;
        content: '';
        @media (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2) {
            transform: scale(1, 0.5) ;
        }
        @media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3) {
            transform: scale(1, 0.33) ;
        }
    }
    .plate-number-inner{
      min-width: 2px;
      min-height: 12px;
      border-right: 1px solid #f1b032;
      animation:myfirst 1s;
      animation-iteration-count: infinite;
      display: flex;
      align-items: center;
    }
    .is-border-show{
      border-right: 1px solid transparent;
      animation: none;
    }
    .error-hint{
      color: red;
    }
  }
  .special-plate{
    flex: 1;
    text-align: right;
    .special-plate-inner{
      display: inline-block;
      color:#455a6499;
    }
  }
  @keyframes myfirst
    {
    0%   {border-right:1px solid #f1b032;}
    25%  {border-right:1px solid #fff;}
    50%  {border-right:1px solid #fff;}
    100% {border-right:1px solid #f1b032;}
    }
}
</style>