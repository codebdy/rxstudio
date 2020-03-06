<template>
  <div class="file-tree">
    <TreeNode v-for = "(node, i) in inputValue" 
      :key = "i" 
      v-model = "inputValue[i]"
      :openIcon = "openIcon"
      :closeIcon = "closeIcon"
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
  },
    }
</script>
