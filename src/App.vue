<template>
  <div>
    <Studio :propData='initData'/>
  </div>
</template>

<script>
import Studio from './components/Main'
export default {
    data(){
      return {
        initData: 'hello 你好'
      }
    },
    components:{
      Studio
    }
}
</script>

<style>

</style>
