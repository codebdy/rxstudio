<template>
  <div class="left-area">
    <div class="left-inner">
      <div class="widget-tabs left-top">
        <div class="heads">
          <div class="item active">Studio</div>
          <div class="item">Files</div>
        </div>
        <div class="tab-body">
          <div class="tab-body-inner">
            <div class="toolbox">
              <div class="tool-group group-collapse">
                <div class="group-title">
                  THEME
                </div>
                <div class="group-body">
                </div>
              </div>
              <div class="tool-group">
                <div class="group-title">
                  GRID <small>Bootstrap 4</small>
                </div>
                <div class="group-body">
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
                </div>
              </div>
              <div class="tool-group group-collapse">
                <div class="group-title">
                  BUTTONS <small>Bootstrap 4</small>
                </div>
                <div class="group-body">
                  wefewfe<br/>
                </div>
              </div>
              <div class="tool-group group-collapse">
                <div class="group-title">
                  TEXT&IMAGES <small>Bootstrap 4</small>
                </div>
                <div class="group-body">
                  wefewfe<br/>
                </div>
              </div>
              <div class="tool-group group-collapse">
                <div class="group-title">
                  UI Elements <small>Bootstrap 4</small>
                </div>
                <div class="group-body">
                  wefewfe<br/>
                </div>
              </div>
              <div class="tool-group group-collapse">
                <div class="group-title">
                  LIST <small>Bootstrap 4</small>
                </div>
                <div class="group-body">
                  wefewfe<br/>
                </div>
              </div>
              <div class="tool-group group-collapse">
                <div class="group-title">
                  TABLES <small>Bootstrap 4</small>
                </div>
                <div class="group-body">
                  wefewfe<br/>
                </div>
              </div>
              <div class="tool-group group-collapse">
                <div class="group-title">
                  CODE <small>Bootstrap 4</small>
                </div>
                <div class="group-body">
                  wefewfe<br/>
                </div>
              </div>
              <div class="tool-group group-collapse">
                <div class="group-title">
                  FORMS <small>Bootstrap 4</small>
                </div>
                <div class="group-body">
                  wefewfe<br/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="widget-tabs left-bottom">
        <div class="y-handle">
        </div>
        <div class="heads">
          <div class="item active">Tree View</div>
        </div>
        <div class="tab-body">
          <div class="tab-body-inner">
            <div class="node-tree">
              <div class="tree-node disable open"><div class="tree-node-title"><div class="title-icon"></div><div class="title-text">html</div></div><div class="tree-node-body"><div class="tree-node disable open"><div class="tree-node-title"><div class="title-icon"></div><div class="title-text">body</div></div><div class="tree-node-body"><div class="tree-node open"><div class="tree-node-title"><div class="title-icon"></div><div class="title-text">div(jumbotron):103</div></div><div class="tree-node-body"><div class="tree-node leaf"><div class="tree-node-title"><div class="title-icon"></div><div class="title-text">h2(heading):104</div></div><div class="tree-node-body"></div></div><div class="tree-node leaf"><div class="tree-node-title"><div class="title-icon"></div><div class="title-text">p(Paragraph):105</div></div><div class="tree-node-body"></div></div><div class="tree-node leaf"><div class="tree-node-title"><div class="title-icon"></div><div class="title-text">hr</div></div><div class="tree-node-body"></div></div><div class="tree-node leaf focused"><div class="tree-node-title"><div class="title-icon"></div><div class="title-text">p(Paragraph):107</div></div><div class="tree-node-body"></div></div><div class="tree-node leaf"><div class="tree-node-title"><div class="title-icon"></div><div class="title-text">a</div></div><div class="tree-node-body"></div></div></div></div></div></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <XHandle></XHandle>
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
    }
  }
}
</script>

<style>
</style>