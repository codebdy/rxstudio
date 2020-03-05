<template>
  <div class="collapsible-item" :class="isActive ? 'active' : ''">
    <div class="item-heading">
      <slot name="heading"></slot>
    </div>
    <div class="item-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollapsibleItem',
  props: {
    selected: { default: false}
  },
  data() {
    return {
      isActive: false
    };
  },
    
  mounted() {
    this.isActive = this.selected;
  }
}
</script>
