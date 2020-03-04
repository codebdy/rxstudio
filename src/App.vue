<template>
  <div id="app" class="vular-studio">
    <toolbar />
    <div class="workspace">
      <LeftArea>
        <template #top>
          <WidgetTabs>
            <tab name="Studio" :selected="true">
              <h1>Studio Content</h1>
            </tab>
            <tab name="Files">
              <h1>Files List</h1>
            </tab>
            <tab name="Others">
              <h1>Other Content</h1>
            </tab>
          </WidgetTabs>
        </template>
        <template #bottom>
          left bottom
        </template>
      </LeftArea>
      <CenterArea></CenterArea>
      <RightArea>
        <template #top>
          right top
        </template>
        <template #bottom>
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
import WidgetTabs from './components/tabs/WidgetTabs.vue'
import Tab from './components/tabs/Tab.vue'

export default {
  name: 'app',
  components:{
    Toolbar,
    LeftArea,
    CenterArea,
    RightArea,
    WidgetTabs,
    Tab,
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
