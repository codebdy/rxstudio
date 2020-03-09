<template>
  <div class="option-overview-box">
    <div class="overview-box-content">
      <div class="tag-row">
        <div class="label">Tag</div> <input value="div" />
      </div>
      <div>Classes:</div>
      <div>Classes</div>
      <div>Classes</div>
      <div>Classes</div>
      <div>Classes</div>
      <div>Classes</div>
      <div>Classes</div>
      <div>Classes</div>
      <div>Classes</div>
      <div>Classes</div>
      <div>Classes</div>
      <div>Classes</div>
      <div>Classes</div>
      <div>Classes</div>
      <div>Classes</div>
      <div>Attributes:</div>
    </div>
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

  .overview-box-content{
    padding: 10px;
    flex: 1;
    display: flex;
    flex-flow: column;
  }

  .tag-row{
    display: flex;
    flex-flow: row;
    align-items: center;
    color: #f0f1ef;
    width:100%;
  }

  .tag-row .label{
    display: flex;
    height: 30px;
    align-items: center;
    padding-left: 6px;
    color:#c2c2c2;
    font-size: 12px;
    width: 60px;
    flex-shrink: 0;
  }

  .tag-row input{
    width: 50px;
    background: #424242;
    color: #d3d3d3;
    outline: transparent;
    border: 0;
  }

</style>
