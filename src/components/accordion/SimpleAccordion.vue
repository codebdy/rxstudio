<template>
  <div class="simple-accordion">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SimpleAccordion',
  props: {
    multiple: { default: false}
  },
  data() {
    return {items: [] };
  },
  
  created() {
    this.items = this.$children;
  },
  methods: {
    selectItem(selectedItem) {
      this.items.forEach(item => {
        item.isShow = (item.name == selectedItem.name);
      });
    }
  }
}
</script>

<style>
  .simple-accordion{
    flex: 1;
    width: 100%;
    overflow-y: auto;
    height: 0;
    display: flex;
    flex-flow: column;
    margin-top: 2px;
  }
  .simple-accordion .collapsible-item{
    display: flex;
    flex-flow: column;
  }
  .simple-accordion .item-heading{
    display: flex;
    align-items: center;
    font-size: 12px;
    height: 30px;
    color:#f0f1ef;
    padding-left: 10px;
    padding-bottom:3px;
    position: relative;
    border-top:#484848 solid 1px;
    border-bottom:#282828 solid 1px;
    cursor: default;
  }

  .simple-accordion .item-heading:hover{
    background: #383838;
  }

  .simple-accordion .collapsible-item .item-heading small{
    color: #aaa;
    font-size: 11px;
    margin-left: 5px;
  }


  .simple-accordion .collapsible-item .item-heading::after{
    position: absolute;
    content: '';
    width: 0; 
    height: 0;
    top: 16px;
    right: 19px;
    border-width: 4px;
    border-style: solid;
    border-color: #f0f1ef transparent transparent  transparent;
  }

  .simple-accordion .item-body{
    border-top:#282828 solid 1px;
    padding: 10px;
  }

  .simple-accordion .collapsible-item.item-collapse .item-heading::after{
    position: absolute;
    content: '';
    width: 0; 
    height: 0;
    top: 12px;
    right: 17px;
    border-width: 4px;
    border-style: solid;
    border-color:transparent transparent  transparent #f0f1ef;
  }

  .simple-accordion .collapsible-item.item-collapse .item-body{
    display: none;
  }

  .simple-accordion .item-body .element{
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: move;
    color: #c2c2c2;
    font-size: 13px;
    padding:5px 5px;
    margin:3px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
  }

  .simple-accordion .item-body .element:hover{
    color: #75b325;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.4); 
  }

</style>