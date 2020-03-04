<template>
  <div class="y-handle" 
    @mousedown="mouseDown" 
  ></div>
</template>

<script>
export default {
  name: 'YHandle',
  data () {
    return {
      lastY:''
    }
  },

  created () {
    document.addEventListener('mouseup', this.mouseUp)
  },

  destroyed() {
    document.removeEventListener('mouseup', this.mouseUp)
  },


  methods: {
    mouseDown(event){
      document.addEventListener('mousemove', this.mouseMove)
      this.lastY = event.screenY
    },
    mouseMove(event){
      console.log('move')
      this.$emit('heightChange', this.lastY - event.screenY)
      this.lastY = event.screenY
    },
    mouseUp(event){
      this.lastY = ''
      document.removeEventListener('mousemove', this.mouseMove)
    },
  },
}
</script>

<style>
</style>