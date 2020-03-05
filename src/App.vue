<template>
  <div id="app" class="vular-studio">
    <toolbar />
    <div class="workspace">
      <LeftArea>
        <template #top>
          <WidgetTabs>
            <tab 
              :name="$t('widgets.studio')"
              :icon="'fas fa-puzzle-piece'" 
              :selected="true"
            >
              <SimpleAccordion>
                <CollapsibleItem :selected = 'true'>
                  <template #heading><span>Theme</span></template>
                  <template #body>theme body</template>
                </CollapsibleItem>
                <CollapsibleItem>
                  <template #heading><span>GRID</span> <small>Bootstrap 4</small></template>
                  <template #body>
                    <div class="element">
                      Container
                      <i class="fas fa-arrows-alt"></i>
                    </div>
                    <div class="element">
                      Row
                      <i class="fas fa-arrows-alt"></i>
                    </div>
                    <div class="element">
                      Column
                      <i class="fas fa-arrows-alt"></i>
                    </div>
                    <div class="element">
                      Row Break
                      <i class="fas fa-arrows-alt"></i>
                    </div>
                  </template>
                </CollapsibleItem>
                <CollapsibleItem>
                  <template #heading><span>BUTTONS</span> <small>Bootstrap 4</small></template>
                  <template #body>buttons body</template>
                </CollapsibleItem>
                <CollapsibleItem>
                  <template #heading><span>TEXT&IMAGES</span> <small>Bootstrap 4</small></template>
                  <template #body>txt body</template>
                </CollapsibleItem>
                <CollapsibleItem>
                  <template #heading><span>UI Elements</span> <small>Bootstrap 4</small></template>
                  <template #body>ddd</template>
                </CollapsibleItem>
                <CollapsibleItem>
                  <template #heading><span>LIST</span> <small>Bootstrap 4</small></template>
                  <template #body>ddd</template>
                </CollapsibleItem>
                <CollapsibleItem>
                  <template #heading><span>TABLES</span> <small>Bootstrap 4</small></template>
                  <template #body>ddd</template>
                </CollapsibleItem>
                <CollapsibleItem>
                  <template #heading><span>CODE</span> <small>Bootstrap 4</small></template>
                  <template #body>ddd</template>
                </CollapsibleItem>
                <CollapsibleItem>
                  <template #heading><span>FORMS</span> <small>Bootstrap 4</small></template>
                  <template #body>ddd</template>
                </CollapsibleItem>
              </SimpleAccordion>
            </tab>
            <tab :name="$t('widgets.files')"
                 :icon="'fas fa-copy'">
              <h1>Files List</h1>
            </tab>
          </WidgetTabs>
        </template>
        <template #bottom>
          <WidgetTabs>
            <tab :name="$t('widgets.treeview')"
                 :icon="'fas fa-code-branch'" 
                 :selected="true">
              <h1>List view</h1>
            </tab>
          </WidgetTabs>
        </template>
      </LeftArea>
      <CenterArea>
        <PageTabs>
          <tab name="Untitled *" :selected="true">
            <div class="page-toolbar">
              <div class="left">
                <div class="icon-button big">
                  <i class="fas fa-tv"></i>
                </div>
                <div class="icon-button">
                  <i class="fas fa-desktop"></i>
                </div>
                <div class="icon-button active">
                  <i class="fas fa-laptop"></i>
                </div>
                <div class="icon-button">
                  <i class="fas fa-tablet-alt"></i>
                </div>
                <div class="icon-button">
                  <i class="fas fa-mobile-alt"></i>
                </div>
              </div>
              <div class="center"></div>
              <div class="right">
                <div class="icon-button">
                  <i class="far fa-square"></i>
                </div>
                <div class="icon-button">
                  <i class="fas fa-arrows-alt-h"></i>
                </div>
                <div class="icon-button">
                  <i class="fas fa-arrows-alt-v"></i>
                </div>
                <div class="icon-button">
                  <i class="fas fa-eye"></i>
                </div>
                <div class="icon-button">
                  <i class="fas fa-undo"></i>
                </div>
                <div class="icon-button">
                  <i class="fas fa-redo"></i>
                </div>
                <div class="icon-button">
                  <i class="fas fa-trash-alt"></i>
                </div>
              </div>
            </div>
            <div class="page-content">
              <div class="content-scroll">
                <div class="canvars">
                </div>
              </div>
            </div>
          </tab>
          <tab name="Untitled2 *">
            <div class="page-toolbar">
              <div class="left">
                <div class="icon-button big">
                  <i class="fas fa-tv"></i>
                </div>
                <div class="icon-button">
                  <i class="fas fa-desktop"></i>
                </div>
                <div class="icon-button ">
                  <i class="fas fa-laptop"></i>
                </div>
                <div class="icon-button">
                  <i class="fas fa-tablet-alt"></i>
                </div>
                <div class="icon-button active">
                  <i class="fas fa-mobile-alt"></i>
                </div>
              </div>
              <div class="center"></div>
              <div class="right">
                <div class="icon-button">
                  <i class="far fa-square"></i>
                </div>
                <div class="icon-button">
                  <i class="fas fa-arrows-alt-h"></i>
                </div>
                <div class="icon-button">
                  <i class="fas fa-arrows-alt-v"></i>
                </div>
                <div class="icon-button">
                  <i class="fas fa-eye"></i>
                </div>
                <div class="icon-button">
                  <i class="fas fa-undo"></i>
                </div>
                <div class="icon-button">
                  <i class="fas fa-redo"></i>
                </div>
                <div class="icon-button">
                  <i class="fas fa-trash-alt"></i>
                </div>
              </div>
            </div>
            <div>page2</div>
          </tab>
        </PageTabs>
      </CenterArea>
      <RightArea>
        <template #top>
          <WidgetTabs>
            <tab :name="$t('widgets.options')"
                 :icon="'fas fa-paint-brush'" 
                 :selected="true">
              <h1>options Content</h1>
            </tab>
            <tab :name="$t('widgets.code')"
                 :icon="'fas fa-code'">
              <h1>code List</h1>
            </tab>
            <tab :name="$t('widgets.anmation')"
                 :icon="'fab fa-windows'">
              <h1>动画</h1>
            </tab>
            <tab :name="$t('widgets.style')"
                 :icon="'fab fa-css3'">
              <h1>Style</h1>
            </tab>
          </WidgetTabs>
        </template>
        <template #bottom>
          <WidgetTabs>
            <tab :name="$t('widgets.overview')"
                 :icon="'fas fa-th-list'" 
                 :selected="true">
              <h1>Over view</h1>
            </tab>
          </WidgetTabs>
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
import PageTabs from './components/tabs/PageTabs.vue'
import SimpleAccordion from './components/accordion/SimpleAccordion.vue'
import CollapsibleItem from './components/accordion/CollapsibleItem.vue'

export default {
  name: 'app',
  components:{
    Toolbar,
    LeftArea,
    CenterArea,
    RightArea,
    WidgetTabs,
    Tab,
    PageTabs,
    SimpleAccordion,
    CollapsibleItem,
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
