<template>
  <div class="container">
    <div>{{msg}}</div>
    <div>{{propData}}</div>
  </div>
</template>

<script>
export default {
  name: 'studio-ui',
  data () {
    return {
      msg: 'Welcome start up'
    }
  },
  props: {
      propData: {
          type: String,
          default: '我是默认值'
      }
  },
  mounted () {
    console.log(11)
  }
}
</script>

<style lang="scss">
.container{
    text-align: center;
}
</style>
