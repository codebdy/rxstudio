<template>
  <div id="app" class="vular-studio">
    <toolbar />
    <div class="workspace">
      <LeftArea>
        <template v-slot:top>
          left top
        </template>
        <template v-slot:bottom>
          left bottom
        </template>
      </LeftArea>
      <CenterArea></CenterArea>
      <RightArea>
        <template v-slot:top>
          right top
        </template>
        <template v-slot:bottom>
          right bottom
        </template>
      </RightArea>
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
