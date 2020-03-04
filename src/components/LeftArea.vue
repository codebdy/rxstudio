<template>
  <div class="left-area" :style="{width:width + 'px'}">
    <div class="left-inner">
    </div>
    <XHandle @widthChange="widthChange"></XHandle>
  </div>
</template>

<script>
import XHandle from './XHandle.vue'
export default {
  name: 'LeftArea',
  components:{
    XHandle,
  },
  data () {
    return {
      width:220,
    }
  },
  methods: {
    widthChange(movement){
      this.width += movement
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