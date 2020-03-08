<template>
  <CollapsibleItem @itemClick = "itemClick">
    <template #heading>{{inputValue.label}}</template>
    <template #body>dd</template>
  </CollapsibleItem>
</template>

<script>
import CollapsibleItem from '../accordion/CollapsibleItem.vue'

export default {
  name: 'OptionGroup',
  components:{
    CollapsibleItem
  },
  props:{
    value:{ default:{} }, 
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
    itemClick(item){
      this.$emit('itemClick', item)
    },
  },
}
</script>

<style>
</style>