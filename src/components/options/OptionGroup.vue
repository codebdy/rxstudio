<template>
  <CollapsibleItem class="option-item" @itemClick = "itemClick">
    <template #heading>
      {{inputValue.label}} 
      <div v-if="changed" class="reset-button" @click="resetAll">{{$t('widgets.reset')}}</div>
    </template>
    <template #body>
      <RxInputRow 
        v-for="(row, i) in inputValue.rows" 
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

    changed(){
      for(var i in this.inputValue.rows){
        let row = this.inputValue.rows[i]
        if(row.value !== row.defaultValue){
          return true
        }
      }
      return false
    }
  },
  methods: {
    itemClick(item){
      this.$emit('itemClick', item)
    },

    resetAll(event){
      for(var i in this.inputValue.rows){
        this.inputValue.rows[i].value = this.inputValue.rows[i].defaultValue
      }
      event.stopPropagation()
    }
  },
}
</script>

<style>
.option-item{
  font-size: 12px;
}
.option-item.collapsible-item .item-heading{
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}

.reset-button{
  margin-right:20px;
  color: #bbb;
}
</style>