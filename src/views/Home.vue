<template>
    <div class="flex h-full flex-col p-8">
        <div class="flex h-full justify-center gap-2 mt-2">
          <router-link :to="{ name: 'ByLetter', params: { letter } }" v-for="letter of letters" :key="letter">
             {{  letter }}
          </router-link>
        </div>
    </div>
</template>

<script>
export default{
  name:'HomeView',
  data(){
    return{
      letters : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
    }
  },
}

</script>

<style>

</style>


<!-- vuex allow us to create a store and store all the data there , allowing all the components to access the data from the store -->