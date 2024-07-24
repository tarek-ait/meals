<template>
  <NavBar></NavBar>
  <router-view></router-view>
  <h1 style="font-size: 15px;margin-top: 3rem;margin-bottom: 3rem;font-weight: 600;text-align: center;">Made with ❤️ by Tarek Ait Ahmed</h1>
</template>


<script >
import NavBar from './components/NavBar.vue'
export default{
  name: 'App',
  components:{
    NavBar
  }
}

</script>


<style scoped>

</style>
