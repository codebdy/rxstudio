<template>
  <div class="left-area" :class="sizeClass" :style="{width:width + 'px'}">
    <div class="left-inner">
      <div class="top-area">
        <slot name="top"></slot>
      </div>
      <BottomArea>
        <slot name="bottom"></slot>
      </BottomArea>
    </div>
    <XHandle @widthChange="widthChange"></XHandle>
  </div>
</template>

<script>
import XHandle from './XHandle.vue'
import BottomArea from './BottomArea.vue'
export default {
  name: 'LeftArea',
  components:{
    XHandle,
    BottomArea,
  },
  data () {
    return {
      width:220,
      sizeClass:"",
    }
  },
  created () {
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

/*      if(this.width <= 120){
        this.sizeClass = 'middle-size'
      }
      else if(this.width <= 90){
        this.sizeClass = 'mini-size'
      }
      else{
        this.sizeClass = ''
      }*/

    },
  },
}
</script>

<style>
</style>