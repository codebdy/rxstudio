<template>
  <div class="tree-node">
    <div class="node-title" @click="click">
      <div class="node-icon">
        <i v-show="icon" :class="icon"></i>
      </div>
      {{inputValue.title}}
    </div>
    <div v-show="showChild" class="children-nodes">
      <TreeNode v-for="(child, i) in inputValue.children" 
        :key="i" 
        v-model="inputValue.children[i]"
      ></TreeNode>
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
  },
  data() {
    return {
      isOpened : false,
      isSelected : false,
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

    icon(){
      if(this.inputValue.children
         &&this.inputValue.children.length > 0){
        return this.isOpened ? this.openIcon :this.closeIcon
      }
      return 'far fa-file-code'
    },

    showChild(){
      return (this.inputValue.children
         &&this.inputValue.children.length > 0) && this.isOpened
    }
  },

  methods: {
    click(){
      this.isOpened = !this.isOpened
    }
  },
    
  mounted() {
    this.node = this.value;
  }
}
</script>

<style>
  .tree-node{

  }

  .children-nodes{
    padding-left:20px;
  }

  .tree-node .node-title{
    height: 30px;
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    align-items: center;
    padding-left: 10px;
  }

  .tree-node .node-icon{
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
  }

  .tree-node .node-title:hover{
    background: rgba(255,255,255, 0.05);
  }
</style>
