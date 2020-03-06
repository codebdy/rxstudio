<template>
  <div class="file-tree">
    <TreeNode v-for = "(node, i) in inputValue" 
      :key = "i" 
      v-model = "inputValue[i]"
      :openIcon = "openIcon"
      :closeIcon = "closeIcon"
      :folderCanbeSelected = "false"
      @nodeSelected = "nodeSelected"
      ></TreeNode>
  </div>
</template>

<script>
import TreeNode from "./TreeNode.vue"

export default {
  name: 'FileTree',
  props: {
    value: { default: []},
    openIcon:{ default: 'fas fa-folder-open'},
    closeIcon:{ default: 'fas fa-folder'},
    leafIcon:{ default: 'fas fa-file' },
  },
  components:{
    TreeNode
  },
  data() {
    return {
    };
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
  },

  methods: {
    nodeSelected(selectedNode){
      this.inputValue.forEach(child=>{
        this.resetSelected(selectedNode, child)
      })
      this.$emit('nodeSelected', selectedNode)
    },

    //递归充置选择状态
    resetSelected(selectedNode, node){
      node.selected = (node === selectedNode)
      if(node.children){
        node.children.forEach(child=>{
          this.resetSelected(selectedNode, child)
        })
      }
    }
  },
}
</script>
