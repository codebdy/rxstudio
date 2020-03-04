<template>
  <div id="app" class="vular-studio">
    <toolbar />
    <div class="workspace">
      <LeftArea></LeftArea>
      <CenterArea></CenterArea>
      <RightArea></RightArea>
    </div>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import LeftArea from './components/LeftArea.vue'
import CenterArea from './components/CenterArea.vue'
import RightArea from './components/RightArea.vue'

export default {
  name: 'app',
  components:{
    Toolbar,
    LeftArea,
    CenterArea,
    RightArea,
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
