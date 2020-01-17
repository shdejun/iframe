<template>
  <div id="specialPlate">
    <van-action-sheet
      v-model="visible"
      get-container="body"
      :actions="actions"
      @select="onSelect"
      cancel-text="取消"
      @cancel="onCancel"
      @click-overlay="clickOverlay"
      :round="false"
    >
    </van-action-sheet>
  </div>
</template>
<script>
export default {
  name: "specialPlate",
  data() {
    return {
      visible:true,
      actions: [
        { name: '小车' },
        { name: '大车' },
        { name: '教练'},
        { name: '香港'},
        { name: '澳门'},
      ],
    };
  },
  computed: {
  },
 
  methods: {
    onSelect(e){
      this.$emit('onSelect',e)
      this.visible = false
    },
    onCancel(){
      this.$emit('onCancel')
    },
    clickOverlay(){
      this.$emit('onCancel')
    }
  }
};
</script>
<style lang="scss">
#specialPlate {
 
}
</style>