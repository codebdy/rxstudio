<template>
  <div class="widget-tabs">
    <ul  class="heads">
      <li v-for="tab in tabs" class="item" :class="{ 'active': tab.isActive }">
          <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
      </li>
    </ul>
    <div class="tab-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabsWidget',
  data() {
    return {tabs: [] };
  },
  
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name);
      });
    }
  }
}
</script>

