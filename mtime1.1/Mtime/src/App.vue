<template>
  <div id="app">
    <topnav v-if="topnavShow"></topnav>
    <router-view></router-view>
    <bottomnav></bottomnav>
  </div>
</template>

<script>

import topnav from "@/components/nav/topnav"
import bottomnav from "@/components/nav/bottomnav"

export default {
  name: 'app',
  components:{
  	topnav,
  	bottomnav
  },

  data(){
    return {
    }
  },
  computed:{
    topnavShow(){
      return this.$store.state.topnavShow
    }
  }
}
</script>

<style>
html,body{
	width:100%;
	height:100%;
}
#app {
	position:absolute;
	left:0;
	right:0;
	top:0;
	bottom:0;
  font-family: "helvetica neue","微软雅黑";
}



</style>
