<template>
  <div class="tree-node" :class="inputValue.selected ? 'selected' :''"

  >
    <div class="node-title" 
      @click="click"  
      @contextmenu.prevent = 'onContextMenu'
      ref="nodTitle"
    >
      <div  class="node-icon" @click="iconClick">
        <i v-show="icon" :class="icon"></i>
      </div>
      {{inputValue.title}}
    </div>
    <div v-show="showChild" class="children-nodes">
      <TreeNode v-for="(child, i) in inputValue.children" 
        :openIcon = "openIcon"
        :closeIcon = "closeIcon"
        :leafIcon = "leafIcon"
        :key="i" 
        :folderCanbeSelected = "folderCanbeSelected"
        :editable = "editable"
        v-model="inputValue.children[i]"
        @nodeSelected = "nodeSelected"
      ></TreeNode>
    </div>
    <div v-if='showContextMenu' class="node-context-menu">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'TreeNode',
  props: {
    value: { default: {}},
    openIcon:{ default: 'fas fa-folder-open'},
    closeIcon:{ default: 'fas fa-folder'},
    leafIcon:{ default: 'fas fa-file' },
    folderCanbeSelected:{ default: false },
    editable: { default:false },
  },
  data() {
    return {
      contextMenuPoped: false,
    }
  },

  computed:{
    inputValue: {
        get:function() {
          return this.value;
        },
        set:function(val) {
          this.$emit('input', val);
        },
    },

    showContextMenu(){
      return this.contextMenuPoped && this.editable
    },

    icon(){
      if(this.hasChildren){
        return this.inputValue.opened ? this.openIcon : this.closeIcon
      }
      return this.inputValue.icon !== undefined ? this.inputValue.icon : this.leafIcon
    },

    showChild(){
      return this.hasChildren && this.inputValue.opened
    },

    hasChildren(){
      return this.inputValue.children
         &&this.inputValue.children.length > 0
    },
  },
  mounted () {
    document.addEventListener('click', this.hideCOntextMenuNoCondition)
    document.addEventListener('contextmenu', this.hideContextMenu)
  },

  beforeDestroyed() {
    document.removeEventListener('click', this.hideCOntextMenuNoCondition)
    document.removeEventListener('contextmenu', this.hideContextMenu)
  },

  methods: {
    click(){
      if((this.hasChildren && this.folderCanbeSelected) || !this.hasChildren){
        this.inputValue.selected = true
        this.$emit('nodeSelected', this.inputValue)
      }
      else {
        this.inputValue.opened = !this.inputValue.opened
      }
    },

    iconClick(event){
      if(this.hasChildren && this.folderCanbeSelected){
        event.stopPropagation()
        this.inputValue.opened = !this.inputValue.opened
      }
    },

    nodeSelected(node){
      this.$emit('nodeSelected', node)
    },

    onContextMenu(event){
      this.contextMenuPoped = true
      //event.stopPropagation()
    },

    hideContextMenu(event){
      console.log(event.target, this.$refs.nodTitle)
      if(event.target !== this.$refs.nodTitle){
        this.contextMenuPoped = false
      }
    },

    hideCOntextMenuNoCondition(){
      this.contextMenuPoped = false
    }
  },

}
</script>

<style>
  .tree-node.selected{
    background: rgba(0,123,255, 0.1)
  }

  .children-nodes{
    padding-left:15px;
  }

  .tree-node .node-title{
    height: 30px;
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    align-items: center;
    padding-left: 0px;
    flex-shrink: 0;
  }

  .tree-node .node-icon{
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: center;
  }

  .tree-node .node-title:hover{
    background: rgba(255,255,255, 0.05);
  }

  .node-context-menu{
    position: fixed;
    display: flex;
    min-height: 200px;
    min-width: 200px;
    background: #eee;
  }
</style>
