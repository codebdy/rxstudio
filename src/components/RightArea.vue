<template>
  <div class="right-area" :style="{width:width + 'px'}">
    <XHandle @widthChange="widthChange"></XHandle>
    <div class="right-inner">
    </div>
  </div>
</template>

<script>
import XHandle from './XHandle.vue'
export default {
  name: 'RightArea',
  components:{
    XHandle,
  },
  data () {
    return {
      width:280,
    }
  },
  methods: {
    widthChange(movement){
      this.width -= movement
      if(this.width < 50){
        this.width = 50
      }
      if(this.width > 600){
        this.width = 600
      }
    },
  },
}
</script>

<style>
</style>