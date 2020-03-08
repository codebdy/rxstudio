<template>
  <div class="rx-input-row" :class = "changed ? 'changed' :''">
    <div class="label">{{label}}</div>
    <component 
      :is = "inputName"
      v-bind = "inputProps"
      v-model = "inputValue"
    ></component>
  </div>
</template>

<script>
import RxSwitch from './RxSwitch.vue'

export default {
  name: 'RxInputRow',
  props:{
    label:{ default:'' }, 
    defaultValue:{ default:'' }, 
    value:{ default:'' }, 
    inputProps:{ default:'' },
    inputName:{defalut:'input'},
  },
  components:{
    RxSwitch,
  },
  data () {
    return {
    }
  },
  computed:{
    changed(){
      return this.inputValue !== this.defaultValue
    },

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

<style>
  .rx-input-row{
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  .rx-input-row .label{
    display: flex;
    height: 30px;
    align-items: center;
    padding-left: 6px;
    color:#c2c2c2;
    font-size: 12px;
    width: 100px;
  }
  .rx-input-row.changed .label{
    color:#7c9161;
  }
</style>