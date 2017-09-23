<template>
  <div id="app">
    <topbar></topbar>  
    <router-view></router-view>
  </div>
</template>

<script>
import topbar from '@/components/top-bar'


export default {
  created(){
    this.$store.dispatch('getCart')
  },

  name: 'app',
  components:{
    topbar
  }

}
</script>

<style>
html,body{
  width:100%;height:100%;
}
#app {
  width:1080px;height:100%;margin:auto;
}


</style>
