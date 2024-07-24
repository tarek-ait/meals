<template>
 <div class="p-8">
    <input type="text" @change="LetterSearch" v-model="keyletter" class="rounded border-2 border-gray-200 h-full w-full" placeholder="search for meals by the first letter" maxlength="1">
   
  </div>
  <div v-if="!meals" class="text-center">there are no meals</div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"></MealItem>
  </div>

</template>

<script>
import MealItem from '../components/MealItem.vue'

 
export default{
  name : 'mealsByLetter',
  components:{
    MealItem,
  },
  data(){
    return{
      keyletter: ''
    }
  },
  computed:{
    meals(){
      return this.$store.state.searchedMeals
    }
  },
  methods:{
    LetterSearch(){
      this.$store.dispatch('LetterSearch', this.keyletter)
    }
  },
  onMounted(){
    this.LetterSearch
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.keyletter = vm.$route.params.letter;
      vm.LetterSearch();
    });
  },
}
</script>

<style>

</style>