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
                  <template #heading><span>主题</span></template>
                  <template #body>
                    <MouseOverPop class="toolbox-element">
                      <template #heading>
                        <div class="element-title">
                          导航
                        </div>
                      </template>
                      <template #body>
                        <div class="pop-content">
                          <img style="width: 100%;" src="images/navbar.jpg" />
                        </div>
                      </template>
                    </MouseOverPop>
                    <MouseOverPop class="toolbox-element">
                      <template #heading>
                        <div class="element-title">
                          Header
                        </div>
                      </template>
                      <template #body>
                        <div class="pop-content">
                          <img style="width: 100%;" src="images/header.jpg" />
                        </div>
                      </template>
                    </MouseOverPop>
                    <MouseOverPop class="toolbox-element">
                      <template #heading>
                        <div class="element-title">
                          服务
                        </div>
                      </template>
                      <template #body>
                        <div class="pop-content">
                          <img style="width: 100%;" src="images/services.jpg" />
                        </div>
                      </template>
                    </MouseOverPop>
                    <MouseOverPop class="toolbox-element">
                      <template #heading>
                        <div class="element-title">
                          优秀案例
                        </div>
                      </template>
                      <template #body>
                        <div class="pop-content">
                          <img style="width: 100%;" src="images/portfolio.jpg" />
                        </div>
                      </template>
                    </MouseOverPop>
                  </template>
                </CollapsibleItem>
                <CollapsibleItem>
                  <template #heading><span>栅格</span> <small>Bootstrap 4</small></template>
                  <template #body>
                    <div class="toolbox-element">
                      容器
                      
                    </div>
                    <div class="toolbox-element">
                      Row
                      
                    </div>
                    <div class="toolbox-element">
                      Column
                      
                    </div>
                    <div class="toolbox-element">
                      Row Break
                      
                    </div>
                  </template>
                </CollapsibleItem>
                <CollapsibleItem>
                  <template #heading><span>按钮</span> <small>Bootstrap 4</small></template>
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
              <NodeTree v-model="files" 
               :openIcon="'fas fa-folder-open'" 
               :closeIcon="'fas fa-folder'"
               :editable = 'true' >
               </NodeTree>
            </tab>
          </WidgetTabs>
        </template>
        <template #bottom>
          <WidgetTabs>
            <tab 
              :name="$t('widgets.treeview')"
              :icon="'fas fa-code-branch'" 
              :selected="true">
              <NodeTree v-model="nodes" 
                :openIcon="'fas fa-caret-down'" 
                :closeIcon="'fas fa-caret-right'" 
                :leafIcon="''"
                :folderCanbeSelected = 'true'>
              </NodeTree>
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
import MouseOverPop from './components/MouseOverPop.vue'
import NodeTree from './components/tree/NodeTree.vue'

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
    MouseOverPop,
    NodeTree,
  },
  data () {
    return {
      files:[
        {
          title:this.$t('widgets.pages'),
          selected:false,
          opened:false,
          isFolder:true,//不能被编辑，可以新建子节点
          leafIcon:'far fa-file-code',//子节点图标，构建新节点时使用
          children:[
            {
              title:'index.html',
              selected:false,
              opened:false,
              isEditing:false,
              icon:"far fa-file-code",
            },
            {
              title:'about.html',
              selected:false,
              opened:false,
              isEditing:false,
              icon:"far fa-file-code",
            },
            {
              title:'product.html',
              selected:false,
              opened:false,
              isEditing:false,
              icon:"far fa-file-code",
            },
          ],
        },
        {
          title:this.$t('widgets.styles'),
          selected:false,
          opened:false,
          isFolder:true,
          leafIcon:'far fa-file-code',//子节点图标，构建新节点时使用
          children:[
            {
              title:'style.css',
              selected:false,
              opened:false,
              isEditing:false,
              icon:"far fa-file-code",
            },
            {
              title:'custom.css',
              selected:false,
              opened:false,
              isEditing:false,
              icon:"far fa-file-code",
            },
          ],
        },
        {
          title:this.$t('widgets.javascript'),
          selected:false,
          opened:false,
          isFolder:true,
          leafIcon:'far fa-file-code',//子节点图标，构建新节点时使用
          children:[
            {
              title:'jquery.js',
              selected:false,
              opened:false,
              isEditing:false,
              icon:"far fa-file-code",
            },
            {
              title:'customweweweeewewwwwew.js',
              selected:false,
              opened:false,
              icon:"far fa-file-code",
              isEditing:false,
            },
          ],
        },
        {
          title:this.$t('widgets.images'),
          selected:false,
          opened:false,
          isFolder:true,
          leafIcon:'fas fa-image',//子节点图标，构建新节点时使用
          children:[
            {
              title:'logo.png',
              selected:false,
              opened:false,
              isEditing:false,
              icon:"fas fa-image",
            },
            {
              title:'about.jpg',
              selected:false,
              opened:false,
              isEditing:false,
              icon:"fas fa-image",
            },
          ],
        }
      ],

      nodes:[
        {
          title:'html',
          selected:false,
          opened:false,
          locked:true,//不能被选中
          children:[
            {
              title:'body',
              selected:false,
              opened:false,
              locked:true,//不能被选中
              icon:"far fa-file-code",
              children:[
                {
                  title:'container',
                  selected:false,
                  opened:false,
                },
                {
                  title:'div',
                  selected:false,
                  opened:false,
                  children:[
                    {
                      title:'div',
                      selected:false,
                      opened:false,
                    },
                    {
                      title:'section',
                      selected:false,
                      opened:false,
                      children:[
                        {
                          title:'div',
                          selected:false,
                          opened:false,
                        },
                        {
                          title:'div',
                          selected:false,
                          opened:false,
                          children:[
                            {
                              title:'footerewweewewew',
                              selected:false,
                              opened:false,
                            }
                          ]

                        },
                      ]

                    },
                    {
                      title:'span',
                      selected:false,
                      opened:false,
                    },
                  ]
                },
              ]
            },
          ],
        },
      ]

    }
  }
}
</script>

<style>
</style>
