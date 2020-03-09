<template>
  <Modal v-model="inputValue" :size="'large'" :class="'theme-select-dialog'">
    <div class="dialog-head">{{$t('theme.theme-select')}} 
      <span 
        class="close-button"
        @click="inputValue = false"
      >×</span></div>
    <div class="dialog-body">
      <div class="tab-header">
        <div>网站</div>
        <div>H5单页</div>
        <div>表单</div>
      </div>
      <div>
        ddd
      </div>
    </div>
    <div class="dialog-footer">
      <div class="dialog-button cancel-btn"
        @click="inputValue = false"
      >{{$t('theme.cancel')}}</div>
      <div class="dialog-button confirm-btn"
        @click="inputValue = false"
      >{{$t('theme.select')}}</div>
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue'
export default {
  name: 'ThemeSelectDialog',
  components:{
    Modal,
  },
  props:{
    value:{ default:'' }, 
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
  },
}
</script>

<style>
.theme-select-dialog{
  color: #474747;
}
.dialog-head{
  height: 50px;
  border-bottom:#ddd solid 1px;
  display: flex;
  flex: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  font-size: 18px;
}

.dialog-head .close-button{
  color: #999;
  margin-right: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

.dialog-head .close-button:hover{
  color:#000;
}

.dialog-body{
  flex: 1;
  display:flex;
  flex-flow: column;
  padding:10px;
}

.dialog-body .tab-header{
  height: 30px;
  display: flex;
  flex-flow: row;
}

.dialog-body::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
  background: #aaa;
}
.dialog-body::-webkit-scrollbar-track {
  border-radius: 0;
}
.dialog-body::-webkit-scrollbar-thumb {
  border-radius: 0;
  background: #ccc;
  transition: all .2s;
}
.dialog-body::-webkit-scrollbar-thumb:hover {
  background-color: #ddd;
}

.dialog-body::-webkit-scrollbar-corner{
  background: transparent;
}

.dialog-footer{
  height: 60px;
  border-top:#ddd solid 1px;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 50px;
}

.dialog-footer .dialog-button{
  font-size: 14px;
  padding: 0 30px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 3px;
  height: 36px;
  display: flex;
  align-items: center;
  border-radius: 18px;
}

.dialog-footer .dialog-button.confirm-btn{
  color: #fff;
  background: #75b325;
}

.dialog-footer .dialog-button.confirm-btn:hover{
  background: #649a1f;
}

.dialog-footer .dialog-button.cancel-btn{
  color: #6c757d;
  background: #fff;
  border:#95a0aa solid 1px;
}

.dialog-footer .dialog-button.cancel-btn:hover{
  background: #f9f9f9;
}
</style>