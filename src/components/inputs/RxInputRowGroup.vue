<template>
  <div class="row-group">
    <div class="rx-input-row group-header" :class = "changed ? 'changed' :''">
      <div class="label" 
        :class="collapsed? 'collapsed' :''"
        @click="click"
      >{{label}}</div>
      <div class="group-value"></div>
    </div>
    <div v-if="!collapsed" class="row-group-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RxInputRowGroup',
  props:{
    label:{ default:'' }, 
    rows:{ default:[] }, 
  },
  data () {
    return {
      collapsed: true,
    }
  },
  computed:{
    changed(){
      return false
      //return this.inputValue !== this.defaultValue
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
    click(){
      this.collapsed = !this.collapsed
    },
  },
}
</script>

<style>
.row-group-body .rx-input-row .label{
  justify-content: center;
}
.row-group .group-header .label{
  position: relative;
}

.row-group .group-header .label::after{
  position: absolute;
  content: '';
  width: 0; 
  height: 0;
  top: 13px;
  right: 7px;
  border-width: 4px;
  border-style: solid;
  border-color: #c2c2c2 transparent transparent  transparent;
}

.row-group .group-header .label.collapsed::after{
  position: absolute;
  content: '';
  width: 0; 
  height: 0;
  top: 11px;
  right: 7px;
  border-width: 4px;
  border-style: solid;
  border-color:transparent transparent  transparent #c2c2c2;
}

</style>