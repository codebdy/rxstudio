<template>
  <div class="toolbar">
    <div class="left">
      <div class="button new"> 
        <i class="fas fa-layer-group"></i> 
        New
      </div>
      <div class="button open"> 
        <i class="fas fa-folder-open"></i> 
        Open
      </div>
      <div class="button save"> 
        <i class="fas fa-save"></i> 
        Save
      </div>
    </div>
    <div class="center"><span class="logo">RXEditor</span></div>
    <div class="right">
      <div class="button download"> 
        <i class="fas fa-download"></i> 
        Download
      </div>
      <div class="button about"> 
        <i class="fas fa-question-circle"></i> 
        About
      </div>
      <a class="button github-link" target="_blank" href="https://github.com/vularsoft/studio-ui"><i class="fab fa-github"></i> Github</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  data () {
    return {
    }
  }
}
</script>

<style>
</style>