<template>
  <div class="p-8">
    <input type="text" @change="searchMeals" v-model="keyword" class="rounded border-2 border-gray-200 h-full w-full" placeholder="search for meals">
  </div>
  <div v-if="!meals" class="text-center">there are no meals</div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"></MealItem>
  </div>
</template>

<script >
import MealItem from '../components/MealItem.vue'
 
export default{
  name: 'mealsByName',
  components:{
    MealItem
  },
  data(){
    return{
      keyword: ''
    }
  },
  computed:{
    meals(){
      return this.$store.state.searchedMeals
    }
  },
  methods:{
    searchMeals(){
      console.log(this.keyword)
      this.$store.dispatch('searchMeals', this.keyword)
    }
  },
  onMounted(){
    this.searchMeals
  }
}

</script>

<style>

</style>