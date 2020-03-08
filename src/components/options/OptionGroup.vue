<template>
  <CollapsibleItem @itemClick = "itemClick">
    <template #heading>{{inputValue.label}}</template>
    <template #body>
      <RxInputRow 
        v-for="(row, i) in inputValue.inputs" 
        :key="i" 
        :label = "row.label"
        :inputName = "row.inputName"
        :inputProps = "row.props"
        :defaultValue = "row.defaultValue"
        v-model = "row.value"
      >
      </RxInputRow>
    </template>
  </CollapsibleItem>
</template>

<script>
import CollapsibleItem from '../accordion/CollapsibleItem.vue'
import RxInputRow from '../inputs/RxInputRow.vue'

export default {
  name: 'OptionGroup',
  components:{
    CollapsibleItem,
    RxInputRow
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
  mounted () {
    //console.log(this.value)
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