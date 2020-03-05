<template>
  <div v-show="isShow">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    name: { required: true },
    selected: { default: false}
  },
  data() {
    return {
      isShow: false
    };
  },
    
  mounted() {
    this.isShow = this.selected;
  }
}
</script>
