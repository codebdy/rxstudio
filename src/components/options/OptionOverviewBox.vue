<template>
  <div class="option-overview-box">
    OptionOverview Box
  </div>
</template>

<script>

export default {
  name: 'OptionOverviewBox',
  components:{
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
  },
}
</script>
<style type="text/css">
  .option-overview-box{
    flex: 1;
    width: 100%;
    overflow: auto;
    height: 0;
    display: flex;
    flex-flow: column;
  }
</style>
