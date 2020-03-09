<template>
  <div class="border-input" :class="addBorder ? 'add-border' :'remove-border'">
    <div class="view">
      <div>
        <div class="view-button top"></div>
      </div>
      <div>
        <div class="view-button right"></div>
      </div>
      <div>
        <div class="view-button bottom"></div>
      </div>
      <div>
        <div class="view-button left"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RxBorderInput',
  props:{
    value:{ default:[] }, 
    addBorder:{ default : true},
    list:{ default:{} },
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

  data () {
    return {
    }
  },

  methods: {
    clear(event){
      this.inputValue = ''
    },

    itemClick(value){
      this.inputValue = value
    },
  },
}
</script>

<style>
  .border-input{
    padding:5px 0;
  }

  .border-input .view{
    width:30px; 
    height:30px; 
    position:relative;
    border: dotted rgba(255,255,255,0.2) 1px;
  }

  .border-input .view .view-button{
    position:absolute;
    background:rgba(255,255,255,0);
    cursor: pointer;
  }

  .border-input .view .top{
    height:8px; 
    width:20px;
    left:5px;
    top:-5px;
  }

  .border-input .view .right{
    height:20px; 
    width:8px;
    right:-5px;
    top:5px;
  }

  .border-input .view .bottom{
    height:8px; 
    width:20px; 
    right:5px;
    bottom:-5px;
  }

  .border-input .view .left{
    height:20px; 
    width:8px;  
    left:-5px;
    top:5px;
  }


  .select-all .view{
    border:solid rgba(255,255,255,0.6) 1px;
  }

  .select-top .view{
    border-top:solid rgba(255,255,255,0.6) 1px;
  }

  .select-right .view{
    border-right:solid rgba(255,255,255,0.6) 1px;
  }

  .select-bottom .view{
    border-bottom:solid rgba(255,255,255,0.6) 1px;
  }

  .select-left .view{
    border-left:solid rgba(255,255,255,0.6) 1px;
  }

  .border-input.remove-border .view{
    width:30px; 
    height:30px; 
    position:relative;
    border: solid rgba(255,255,255,0.6) 1px;
  }

  .remove-border.select-all .view{
    border:dotted rgba(255,255,255,0.2) 1px;
  }

  .remove-border.select-top .view{
    border-top:dotted rgba(255,255,255,0.2) 1px;
  }

  .remove-border.select-right .view{
    border-right:dotted rgba(255,255,255,0.2) 1px;
  }

  .remove-border.select-bottom .view{
    border-bottom:dotted rgba(255,255,255,0.2) 1px;
  }

  .remove-border.select-left .view{
    border-left:dotted rgba(255,255,255,0.2) 1px;
  }

</style>