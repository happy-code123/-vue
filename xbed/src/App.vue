<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
	  <footerbar></footerbar>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import footerbar from '@/components/footer'


export default {
  name: 'app',
  components:{
    navbar,
    footerbar
  }
}
</script>

<style>
html,body{
  width:100%;height:100%;
}
#app{
  width:100%;height:100%;
}

</style>
